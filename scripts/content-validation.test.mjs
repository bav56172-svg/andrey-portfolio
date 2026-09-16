import assert from "node:assert/strict";
import test from "node:test";

import { validatePortfolioContent } from "./content-validation.mjs";

const validContent = {
  links: {
    telegram: "https://t.me/example",
    max: "https://web.max.ru/123456",
    github: "https://github.com/example",
  },
  services: [
    {
      number: "01",
      title: "Сервис",
      description: "Описание сервиса",
    },
  ],
  projects: [
    {
      title: "Проект",
      category: "Категория",
      task: "Задача",
      solution: "Решение",
      contribution: "Вклад",
      stack: "Стек",
      status: "В работе",
      tone: "progress",
      repository: "https://github.com/example/project",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Этап",
      description: "Описание этапа",
    },
  ],
};

test("accepts complete portfolio content", () => {
  assert.doesNotThrow(() => validatePortfolioContent(validContent));
});

test("rejects an empty required collection", () => {
  const invalidContent = structuredClone(validContent);
  invalidContent.projects = [];

  assert.throws(
    () => validatePortfolioContent(invalidContent),
    /projects must contain at least one item/,
  );
});

test("rejects duplicate sequence numbers", () => {
  const invalidContent = structuredClone(validContent);
  invalidContent.services.push({
    number: "01",
    title: "Другой сервис",
    description: "Другое описание",
  });

  assert.throws(
    () => validatePortfolioContent(invalidContent),
    /services contains duplicate number 01/,
  );
});

test("rejects unsupported project tones", () => {
  const invalidContent = structuredClone(validContent);
  invalidContent.projects[0].tone = "unknown";

  assert.throws(
    () => validatePortfolioContent(invalidContent),
    /projects\[0\]\.tone must be one of: live, progress/,
  );
});

test("rejects unsafe external URLs", () => {
  const invalidContent = structuredClone(validContent);
  invalidContent.links.telegram = "javascript:alert(1)";

  assert.throws(
    () => validatePortfolioContent(invalidContent),
    /links\.telegram must be an HTTPS URL/,
  );
});

test("rejects an unsafe MAX URL", () => {
  const invalidContent = structuredClone(validContent);
  invalidContent.links.max = "javascript:alert(1)";

  assert.throws(
    () => validatePortfolioContent(invalidContent),
    /links\.max must be an HTTPS URL/,
  );
});
