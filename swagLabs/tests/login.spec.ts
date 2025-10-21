// tests/login.spec.ts
import { test, expect } from "../fixtures/authFixture";
import { ProductPage } from "../pages/ProductPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import productsData from "../test-data/products.json";

test("Standard user can log in", async ({ loggedInPage }) => {
  await expect(loggedInPage.locator(".title")).toHaveText("Products");
});

test("Standard User Login and verify products page", async ({ productPage }) => {
  await productPage.verifyPage();
  await productPage.addItemToBag(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
});

test.only("Std User login add to cart and remove 1 item", async ({ loggedInPage }) => {
  const productPage = new ProductPage(loggedInPage);
  const checkoutPage = new CheckoutPage(loggedInPage);

  const checkout = productsData.checkout[0];

  await productPage.verifyPage();

  await productPage.addItemToBag(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
  await productPage.removeItemsFromBag(['Sauce Labs Backpack']);

  await productPage.checkoutItem(true);
  await checkoutPage.fillCheckoutDetails(checkout.firstName, checkout.lastName, checkout.postalCode);
  await checkoutPage.continueCheckout();

  await checkoutPage.verifyCheckoutComplete();
})
