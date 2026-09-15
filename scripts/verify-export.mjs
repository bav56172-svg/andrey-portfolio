import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const siteUrl = "https://bav56172-svg.github.io/andrey-portfolio/";

const [html, robots, sitemap] = await Promise.all([
  readFile("out/index.html", "utf8"),
  readFile("out/robots.txt", "utf8"),
  readFile("out/sitemap.xml", "utf8"),
]);

const requiredHtml = [
  `<link rel="canonical" href="${siteUrl}"`,
  'property="og:title"',
  `property="og:url" content="${siteUrl}"`,
  'name="twitter:card" content="summary"',
  'rel="icon"',
  "Как строится работа",
  "Инженерный подход",
  "ЕЦЭУПО",
];

for (const expected of requiredHtml) {
  assert.ok(html.includes(expected), `Missing export marker: ${expected}`);
}

assert.ok(!html.includes("ЕЦУЭПО"), "Obsolete project name found in export");
assert.ok(
  !/fonts\.(googleapis|gstatic)\.com/.test(html),
  "Export must not load fonts from Google",
);
assert.ok(robots.includes(`Sitemap: ${siteUrl}sitemap.xml`));
assert.ok(sitemap.includes(`<loc>${siteUrl}</loc>`));

console.log("Static export verification passed.");
