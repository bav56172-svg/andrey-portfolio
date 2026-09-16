import { readFile } from "node:fs/promises";

import { validatePortfolioContent } from "./content-validation.mjs";

const contentUrl = new URL("../app/portfolio-content.json", import.meta.url);
const content = JSON.parse(await readFile(contentUrl, "utf8"));

validatePortfolioContent(content);

console.log("Portfolio content verification passed.");
