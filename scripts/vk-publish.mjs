import { createHash } from "node:crypto";
import { appendFile, readFile, stat } from "node:fs/promises";
import { basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const API_ROOT = "https://api.vk.ru/method";
const DEFAULT_VERSION = "5.199";

export const TARGETS = {
  profile: {
    key: "profile",
    label: "личная страница Андрея",
    ownerId: 45791512,
    uploadField: "user_id",
    uploadId: 45791512,
  },
  group: {
    key: "group",
    label: "группа СпецТехника76",
    ownerId: -242185483,
    uploadField: "group_id",
    uploadId: 242185483,
    fromGroup: true,
  },
};

export function resolveTargets(value = "profile") {
  if (value === "both") return [TARGETS.profile, TARGETS.group];
  if (TARGETS[value]) return [TARGETS[value]];
  throw new Error("Цель должна быть profile, group или both.");
}

function parseArgs(argv) {
  const [command, draftPath, ...rest] = argv;
  const options = Object.fromEntries(
    rest.map((item) => {
      const [key, ...value] = item.replace(/^--/, "").split("=");
      return [key, value.join("=") || true];
    }),
  );
  return { command, draftPath, options };
}

async function loadDraft(draftPath) {
  if (!draftPath) throw new Error("Укажите путь к JSON-черновику.");
  const absolutePath = resolve(process.cwd(), draftPath);
  const draft = JSON.parse(await readFile(absolutePath, "utf8"));

  if (!draft.title || !draft.message || !Array.isArray(draft.images)) {
    throw new Error("Черновик должен содержать title, message и массив images.");
  }
  if (draft.images.length === 0 || draft.images.length > 10) {
    throw new Error("Для записи требуется от 1 до 10 изображений.");
  }

  const images = [];
  for (const item of draft.images) {
    const imagePath = resolve(process.cwd(), item);
    const info = await stat(imagePath);
    if (!info.isFile()) throw new Error(`Не найден файл: ${item}`);
    images.push({ path: imagePath, source: item, bytes: info.size });
  }

  return { ...draft, absolutePath, images };
}

export async function createApprovalCode(draft, targets, textOnly = false) {
  const imageDigests = [];
  for (const image of draft.images) {
    const digest = createHash("sha256").update(await readFile(image.path)).digest("hex");
    imageDigests.push(digest);
  }

  return createHash("sha256")
    .update(
      JSON.stringify({
        title: draft.title,
        message: draft.message,
        images: imageDigests,
        targets: targets.map((target) => target.ownerId),
        textOnly,
      }),
    )
    .digest("hex")
    .slice(0, 12);
}

function printPreview(draft, targets, approvalCode, textOnly = false) {
  console.log(`\n${draft.title}`);
  console.log(`Цель: ${targets.map((target) => target.label).join(" + ")}`);
  console.log(`Изображения: ${draft.images.length}`);
  for (const image of draft.images) console.log(`- ${image.source} (${image.bytes} байт)`);
  if (textOnly) console.log("Режим: только текст, изображения не загружаются.");
  console.log("\nТекст:\n");
  console.log(draft.message);
  console.log(`\nКод проверенного черновика: ${approvalCode}`);
  console.log("Публикация не выполнена.");
}

async function callVk(method, params, accessToken) {
  const body = new URLSearchParams({ ...params, v: process.env.VK_API_VERSION || DEFAULT_VERSION });
  body.set("access_token", accessToken);
  const response = await fetch(`${API_ROOT}/${method}`, { method: "POST", body });
  const payload = await response.json();
  if (!response.ok || payload.error) {
    const message = payload.error?.error_msg || `HTTP ${response.status}`;
    throw new Error(`${method}: ${message}`);
  }
  return payload.response;
}

async function uploadPhoto(image, target, accessToken) {
  const server = await callVk(
    "photos.getWallUploadServer",
    { [target.uploadField]: String(target.uploadId) },
    accessToken,
  );

  const form = new FormData();
  form.append("photo", new Blob([await readFile(image.path)]), basename(image.path));
  const uploadResponse = await fetch(server.upload_url, { method: "POST", body: form });
  const upload = await uploadResponse.json();
  if (!uploadResponse.ok || !upload.photo || !upload.server || !upload.hash) {
    throw new Error(`Не удалось загрузить ${image.source} на сервер VK.`);
  }

  const saved = await callVk(
    "photos.saveWallPhoto",
    {
      [target.uploadField]: String(target.uploadId),
      photo: upload.photo,
      server: String(upload.server),
      hash: upload.hash,
    },
    accessToken,
  );
  const photo = saved?.[0];
  if (!photo?.owner_id || !photo?.id) throw new Error(`VK не вернул ID для ${image.source}.`);
  return `photo${photo.owner_id}_${photo.id}`;
}

async function publishTarget(draft, target, approvalCode, accessToken, textOnly = false) {
  const attachments = [];
  if (!textOnly) {
    for (const image of draft.images) attachments.push(await uploadPhoto(image, target, accessToken));
  }

  const response = await callVk(
    "wall.post",
    {
      owner_id: String(target.ownerId),
      message: draft.message,
      ...(attachments.length ? { attachments: attachments.join(",") } : {}),
      guid: `${approvalCode}-${target.key}`,
      ...(target.fromGroup ? { from_group: "1" } : {}),
    },
    accessToken,
  );

  if (!response?.post_id) throw new Error(`VK не вернул post_id для цели ${target.key}.`);
  return {
    target: target.key,
    ownerId: target.ownerId,
    postId: response.post_id,
    url: `https://vk.ru/wall${target.ownerId}_${response.post_id}`,
  };
}

async function writeJournal(entry) {
  const journalPath = resolve(process.cwd(), "var/vk-publications.jsonl");
  await appendFile(journalPath, `${JSON.stringify(entry)}\n`, { encoding: "utf8", mode: 0o600 });
}

async function main() {
  const { command, draftPath, options } = parseArgs(process.argv.slice(2));
  if (!command || !["preview", "publish"].includes(command)) {
    throw new Error("Команда: preview или publish.");
  }

  const draft = await loadDraft(draftPath);
  const targets = resolveTargets(String(options.target || "profile"));
  const textOnly = options["text-only"] === true || options["text-only"] === "true";
  const approvalCode = await createApprovalCode(draft, targets, textOnly);

  if (command === "preview") {
    printPreview(draft, targets, approvalCode, textOnly);
    return;
  }

  if (options.approval !== approvalCode) {
    throw new Error("Код подтверждения не совпадает. Сначала повторите preview.");
  }
  let accessToken = process.env.VK_ACCESS_TOKEN;
  if (!accessToken && targets.length === 1 && targets[0].key === "group") {
    const credentials = JSON.parse(
      await readFile(resolve(process.cwd(), "var/vk-group-credentials.json"), "utf8"),
    );
    accessToken = credentials.access_token;
  }
  if (!accessToken) throw new Error("Переменная VK_ACCESS_TOKEN не задана.");

  const results = [];
  for (const target of targets) {
    results.push(await publishTarget(draft, target, approvalCode, accessToken, textOnly));
  }
  const entry = {
    publishedAt: new Date().toISOString(),
    title: draft.title,
    approvalCode,
    results,
  };
  await writeJournal(entry);
  for (const result of results) console.log(`${result.target}: ${result.url}`);
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isMain) {
  main().catch((error) => {
    console.error(`Ошибка: ${error.message}`);
    process.exitCode = 1;
  });
}
