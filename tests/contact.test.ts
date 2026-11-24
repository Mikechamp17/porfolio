import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { resolveEmail } from "../src/lib/contact";

test("placeholder and blank emails stay hidden", () => {
  for (const email of [
    "",
    "   ",
    "you@example.com",
    "REPLACE_ME",
    "TODO",
    "YOUR_EMAIL",
    "mike.example.test",
  ]) {
    assert.equal(resolveEmail(email), null, email);
  }
});

test("a real email becomes a mailto link", () => {
  assert.equal(resolveEmail("mike@example.test")?.href, "mailto:mike@example.test");
});

test("the site and notes do not list prices or a freelance offer", () => {
  const files = [
    "content/me.md",
    "src/app/page.tsx",
    "src/app/api/chat/route.ts",
    "src/lib/data.ts",
  ];
  const banned = [/EUR\s*1[,.]?200/, /1,800/, /Websites for Malta/, /hire me/i];
  for (const file of files) {
    const text = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
    for (const pattern of banned) {
      assert.doesNotMatch(text, pattern, file);
    }
  }
});
