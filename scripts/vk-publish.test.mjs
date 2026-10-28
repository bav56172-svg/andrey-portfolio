import assert from "node:assert/strict";
import { test } from "node:test";

import { createApprovalCode, resolveTargets, TARGETS } from "./vk-publish.mjs";

test("resolveTargets возвращает личную страницу и группу в режиме both", () => {
  assert.deepEqual(resolveTargets("both"), [TARGETS.profile, TARGETS.group]);
});

test("resolveTargets отклоняет неизвестную цель", () => {
  assert.throws(() => resolveTargets("unknown"), /profile, group или both/);
});

test("код подтверждения меняется при смене цели", async () => {
  const draft = {
    title: "Тест",
    message: "Текст",
    images: [{ path: new URL("../assets/banners/portfolio-launch-2026-10-28/vk-cover-1200x630.png", import.meta.url).pathname }],
  };
  const profileCode = await createApprovalCode(draft, resolveTargets("profile"));
  const groupCode = await createApprovalCode(draft, resolveTargets("group"));
  assert.notEqual(profileCode, groupCode);
});
