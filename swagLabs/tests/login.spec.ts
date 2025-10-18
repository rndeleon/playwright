// tests/login.spec.ts
import { test, expect } from "../fixtures/authFixture";
import { ProductPage } from "../pages/ProductPage";

test("Standard user can log in", async ({ loggedInPage }) => {
  await expect(loggedInPage.locator(".title")).toHaveText("Products");
});

test("Standart Uuser Login and verify products page", async ({ loggedInPage  }) =>{
  const productPage = new ProductPage(loggedInPage);
  await productPage.verifyPage();

})