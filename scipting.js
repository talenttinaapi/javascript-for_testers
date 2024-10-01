const { test, expect } = require("@playwright/test");

test("Google homepage title", async ({ page }) => {
  await page.goto("https://www.google.com/");
  const title = await page.title();
  expect(title).toBe("Google");
});