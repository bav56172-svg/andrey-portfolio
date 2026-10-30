import { createHash, randomBytes } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const APP_ID = "54862985";
const REDIRECT_URI = "https://bav56172-svg.github.io/andrey-portfolio/vk-auth.html";
const AUTH_ENDPOINT = "https://id.vk.ru/authorize";
const TOKEN_ENDPOINT = "https://id.vk.ru/oauth2/auth";
const SESSION_PATH = resolve(process.cwd(), "var/vk-auth-session.json");
const CREDENTIALS_PATH = resolve(process.cwd(), "var/vk-credentials.json");
const GROUP_CREDENTIALS_PATH = resolve(process.cwd(), "var/vk-group-credentials.json");
const GROUP_ID = "242185483";
const API_VERSION = "5.199";

function base64url(value) {
  return value.toString("base64url");
}

export function createAuthSession() {
  const codeVerifier = base64url(randomBytes(48));
  const codeChallenge = base64url(createHash("sha256").update(codeVerifier).digest());
  const state = randomBytes(24).toString("hex");
  return { codeVerifier, codeChallenge, state, createdAt: new Date().toISOString() };
}

export function createAuthorizeUrl(session) {
  const url = new URL(AUTH_ENDPOINT);
  url.search = new URLSearchParams({
    response_type: "code",
    client_id: APP_ID,
    redirect_uri: REDIRECT_URI,
    code_challenge: session.codeChallenge,
    code_challenge_method: "S256",
    state: session.state,
    scope: "wall photos offline",
  }).toString();
  return url.toString();
}

export function parseCallback(callbackUrl, expectedState) {
  const url = new URL(callbackUrl);
  const error = url.searchParams.get("error");
  if (error) {
    throw new Error(url.searchParams.get("error_description") || error);
  }

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const deviceId = url.searchParams.get("device_id");
  if (!code || !state || !deviceId) {
    throw new Error("В адресе возврата отсутствуют code, state или device_id.");
  }
  if (state !== expectedState) throw new Error("Проверка state не пройдена.");
  return { code, state, deviceId };
}

async function writePrivateJson(path, value) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`, { mode: 0o600 });
}

async function start() {
  const session = createAuthSession();
  await writePrivateJson(SESSION_PATH, session);
  console.log(createAuthorizeUrl(session));
}

async function exchange(callbackUrl) {
  if (!callbackUrl) throw new Error("Нужен полный адрес возврата VK ID.");
  const session = JSON.parse(await readFile(SESSION_PATH, "utf8"));
  const callback = parseCallback(callbackUrl, session.state);
  const query = new URLSearchParams({
    grant_type: "authorization_code",
    redirect_uri: REDIRECT_URI,
    client_id: APP_ID,
    code_verifier: session.codeVerifier,
    state: session.state,
    device_id: callback.deviceId,
  });
  const response = await fetch(`${TOKEN_ENDPOINT}?${query}`, {
    method: "POST",
    body: new URLSearchParams({ code: callback.code }),
  });
  const payload = await response.json();
  if (!response.ok || payload.error || !payload.access_token) {
    throw new Error(payload.error_description || payload.error || `HTTP ${response.status}`);
  }

  await writePrivateJson(CREDENTIALS_PATH, {
    ...payload,
    device_id: callback.deviceId,
    obtained_at: new Date().toISOString(),
  });
  await rm(SESSION_PATH, { force: true });
  console.log("Авторизация завершена. Данные сохранены только локально в var/vk-credentials.json.");
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8").trim();
}

async function callVk(method, accessToken, params = {}) {
  const body = new URLSearchParams({
    ...params,
    access_token: accessToken,
    v: API_VERSION,
  });
  const response = await fetch(`https://api.vk.ru/method/${method}`, { method: "POST", body });
  const payload = await response.json();
  if (!response.ok || payload.error) {
    throw new Error(payload.error?.error_msg || `HTTP ${response.status}`);
  }
  return payload.response;
}

async function importGroupToken(value) {
  const accessToken = value.trim();
  if (accessToken.length < 40 || /\s/.test(accessToken)) {
    throw new Error("Буфер обмена не похож на ключ доступа VK.");
  }

  const [groupResponse, permissionResponse] = await Promise.all([
    callVk("groups.getById", accessToken, { group_ids: GROUP_ID }),
    callVk("groups.getTokenPermissions", accessToken),
  ]);
  const groups = Array.isArray(groupResponse) ? groupResponse : groupResponse?.groups;
  const group = groups?.[0];
  if (String(group?.id) !== GROUP_ID) {
    throw new Error("Ключ не подтверждён для группы СпецТехника76.");
  }

  const permissions = Array.isArray(permissionResponse?.permissions)
    ? permissionResponse.permissions.map((item) => item.name).filter(Boolean)
    : [];
  await writePrivateJson(GROUP_CREDENTIALS_PATH, {
    access_token: accessToken,
    group_id: Number(GROUP_ID),
    group_name: group.name,
    permissions,
    obtained_at: new Date().toISOString(),
  });
  console.log(`Ключ подтверждён для группы ${group.name || GROUP_ID}.`);
  console.log(`Права: ${permissions.join(", ") || "VK не вернул список прав"}.`);
}

async function main() {
  const [command, value] = process.argv.slice(2);
  if (command === "start") return start();
  if (command === "exchange") return exchange(value || (await readStdin()));
  if (command === "group-import") return importGroupToken(value || (await readStdin()));
  throw new Error("Команда: start, exchange <адрес возврата> или group-import.");
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isMain) {
  main().catch((error) => {
    console.error(`Ошибка: ${error.message}`);
    process.exitCode = 1;
  });
}
