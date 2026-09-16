const PROJECT_TONES = ["live", "progress"];

function assertRecord(value, path) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError(`${path} must be an object`);
  }
}

function assertNonEmptyString(value, path) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new TypeError(`${path} must be a non-empty string`);
  }
}

function assertHttpsUrl(value, path) {
  assertNonEmptyString(value, path);

  let url;

  try {
    url = new URL(value);
  } catch {
    throw new TypeError(`${path} must be an HTTPS URL`);
  }

  if (url.protocol !== "https:") {
    throw new TypeError(`${path} must be an HTTPS URL`);
  }
}

function assertNumberedCollection(items, path) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new TypeError(`${path} must contain at least one item`);
  }

  const numbers = new Set();

  items.forEach((item, index) => {
    const itemPath = `${path}[${index}]`;
    assertRecord(item, itemPath);
    assertNonEmptyString(item.number, `${itemPath}.number`);
    assertNonEmptyString(item.title, `${itemPath}.title`);
    assertNonEmptyString(item.description, `${itemPath}.description`);

    if (!/^\d{2}$/.test(item.number)) {
      throw new TypeError(`${itemPath}.number must contain two digits`);
    }

    if (numbers.has(item.number)) {
      throw new TypeError(`${path} contains duplicate number ${item.number}`);
    }

    numbers.add(item.number);
  });
}

export function validatePortfolioContent(content) {
  assertRecord(content, "content");
  assertRecord(content.links, "links");
  assertHttpsUrl(content.links.telegram, "links.telegram");
  assertHttpsUrl(content.links.github, "links.github");
  assertNumberedCollection(content.services, "services");
  assertNumberedCollection(content.processSteps, "processSteps");

  if (!Array.isArray(content.projects) || content.projects.length === 0) {
    throw new TypeError("projects must contain at least one item");
  }

  content.projects.forEach((project, index) => {
    const path = `projects[${index}]`;
    assertRecord(project, path);

    for (const field of [
      "title",
      "category",
      "task",
      "solution",
      "contribution",
      "stack",
      "status",
    ]) {
      assertNonEmptyString(project[field], `${path}.${field}`);
    }

    if (!PROJECT_TONES.includes(project.tone)) {
      throw new TypeError(
        `${path}.tone must be one of: ${PROJECT_TONES.join(", ")}`,
      );
    }

    if (project.repository !== null) {
      assertHttpsUrl(project.repository, `${path}.repository`);
    }
  });

  return content;
}
