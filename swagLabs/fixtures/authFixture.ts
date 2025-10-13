// fixtures/authFixture.ts
import { test as base, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import config from "../utils/config";

export const test = base.extend<{
  loggedInPage: Page;
}>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      config.standardUser.username,
      config.standardUser.password
    );
    await use(page);
  },
});

export { expect };
