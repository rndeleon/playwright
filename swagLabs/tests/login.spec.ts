// tests/login.spec.ts
import { test, expect } from "../fixtures/authFixture";

test("Standard user can log in", async ({ loggedInPage }) => {
  await expect(loggedInPage.locator(".title")).toHaveText("Products");
});
