import { test, expect } from "@playwright/test";

test("MarketPulse dashboard renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "MarketPulse" })).toBeVisible();
  await expect(page.getByRole("img", { name: "D3 trend chart" })).toBeVisible();
});
