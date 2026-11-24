import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I found my own handwriting in the margins of a book I have never opened, warning me not to finish this sentence.";

if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-whitespace characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
