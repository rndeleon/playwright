import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import config from "../utils/config";

test("Standard user can log in", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(config.standardUser.username, config.standardUser.password);
  await expect(page.locator(".title")).toHaveText("Products");
});
