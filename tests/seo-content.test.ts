import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const requiredPatterns = ["825 Market Street", "lemoynekobekois@gmail.com"];
const forbiddenPatterns = ["(555) 123-4567", "contact@kobekoi.com"];

const filesToCheck = [
  "app/components/Navbar.tsx",
  "app/page.tsx",
  "app/zh/page.tsx",
];

test("public-facing pages show the updated contact details", () => {
  for (const filePath of filesToCheck) {
    const source = readFileSync(new URL(`../${filePath}`, import.meta.url), "utf8");

    for (const requiredValue of requiredPatterns) {
      assert.equal(
        source.includes(requiredValue),
        true,
        `expected ${filePath} to include: ${requiredValue}`,
      );
    }

    for (const forbiddenValue of forbiddenPatterns) {
      assert.equal(
        source.includes(forbiddenValue),
        false,
        `expected ${filePath} to remove placeholder value: ${forbiddenValue}`,
      );
    }
  }
});
