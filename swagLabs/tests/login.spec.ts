// tests/login.spec.ts
import { test, expect } from "../fixtures/authFixture";
import { ProductPage } from "../pages/ProductPage";

test("Standard user can log in", async ({ loggedInPage }) => {
  await expect(loggedInPage.locator(".title")).toHaveText("Products");
});

test("Standard User Login and verify products page", async ({ productPage }) => {
  await productPage.verifyPage();
  await productPage.addItemToBag(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
});

test.only("Std User login add to cart and remove 1 item", async ({productPage}) => {
  await productPage.verifyPage();
  await productPage.addItemToBag(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
  await productPage.removeItemsFromBag(['Sauce Labs Backpack']);
  await productPage.checkoutItem();
  
})
