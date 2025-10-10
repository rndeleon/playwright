import { test, expect } from "../fixtures/authFixture";

test("User can add an item to cart", async ({ loggedInPage }) => {
  await loggedInPage.locator(".inventory_item").first().click();
  await expect(loggedInPage.locator(".shopping_cart_badge")).toHaveText("1");
});

test("User sees Products page after login", async ({ loggedInPage }) => {
  await expect(loggedInPage.locator(".title")).toHaveText("Products");
});
