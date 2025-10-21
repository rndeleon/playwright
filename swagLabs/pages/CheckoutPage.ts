import { Page, expect } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
    console.log(`✏️ Filling out checkout form for ${firstName} ${lastName}`);
    await this.page.fill("#first-name", firstName);
    await this.page.fill("#last-name", lastName);
    await this.page.fill("#postal-code", postalCode);
  }

  async continueCheckout() {
    console.log("➡️ Clicking Continue...");
    await this.page.click("#continue");
  }

  async verifyCheckoutComplete() {
    await this.page.click("#finish");
    await expect(this.page.locator(".complete-header")).toHaveText("Thank you for your order!");
    console.log("✅ Checkout completed successfully!");
  }
}
