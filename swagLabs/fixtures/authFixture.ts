// fixtures/authFixture.ts
import { test as base, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import config from "../utils/config";

type MyFixtures = {
  loggedInPage: Page;
  productPage: ProductPage;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      config.standardUser.username,
      config.standardUser.password
    );
    await use(page);
  },

  productPage: async ({ loggedInPage }, use) => {
    const productPage = new ProductPage(loggedInPage);
    await use(productPage);
  },
});

export { expect };
