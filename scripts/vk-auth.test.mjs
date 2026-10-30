import assert from "node:assert/strict";
import test from "node:test";

import { createAuthorizeUrl, createAuthSession, parseCallback } from "./vk-auth.mjs";

test("ссылка авторизации использует PKCE и точный redirect URI", () => {
  const session = createAuthSession();
  const url = new URL(createAuthorizeUrl(session));
  assert.equal(url.origin, "https://id.vk.ru");
  assert.equal(url.pathname, "/authorize");
  assert.equal(url.searchParams.get("client_id"), "54862985");
  assert.equal(
    url.searchParams.get("redirect_uri"),
    "https://bav56172-svg.github.io/andrey-portfolio/vk-auth.html",
  );
  assert.equal(url.searchParams.get("code_challenge_method"), "S256");
  assert.equal(url.searchParams.get("state"), session.state);
  assert.ok(url.searchParams.get("code_challenge"));
});

test("адрес возврата принимается только с совпадающим state", () => {
  assert.deepEqual(
    parseCallback("https://example.test/?code=abc&state=expected&device_id=device", "expected"),
    { code: "abc", state: "expected", deviceId: "device" },
  );
  assert.throws(
    () => parseCallback("https://example.test/?code=abc&state=wrong&device_id=device", "expected"),
    /state/,
  );
});
