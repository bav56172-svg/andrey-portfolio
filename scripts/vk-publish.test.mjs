import assert from "node:assert/strict";
import { test } from "node:test";

import { createApprovalCode, resolveTargets, TARGETS } from "./vk-publish.mjs";

const fixturePath = new URL(
  "../assets/banners/portfolio-launch-2026-10-28/vk-cover-1200x630.png",
  import.meta.url,
).pathname;

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
    images: [{ path: fixturePath }],
  };
  const profileCode = await createApprovalCode(draft, resolveTargets("profile"));
  const groupCode = await createApprovalCode(draft, resolveTargets("group"));
  assert.notEqual(profileCode, groupCode);
});

test("код подтверждения меняется для режима только текста", async () => {
  const draft = {
    title: "Тест",
    message: "Текст",
    images: [{ path: fixturePath }],
  };
  const withImage = await createApprovalCode(draft, [TARGETS.group]);
  const textOnly = await createApprovalCode(draft, [TARGETS.group], true);
  assert.notEqual(withImage, textOnly);
});
