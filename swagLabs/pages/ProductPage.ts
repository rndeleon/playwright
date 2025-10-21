import { Page, expect } from "@playwright/test";

export class ProductPage {
    readonly page: Page;

    constructor (page: Page){
        this.page = page;
    }

    async verifyPage(){
        await expect(this.page.locator('.title')).toHaveText('Products')
    }

    async addItemToBag(items: string[]) {
        for (const item of items) {
            const addButton = this.page
                .locator('.inventory_item')
                .filter({ hasText: item })
                .locator('button:has-text("Add to cart")');
            if (await addButton.count()) {
            await addButton.click();
            }
        }
    }

    async removeItemsFromBag(items: string[]){
        for ( const item of items){
            const removeButton = this.page.locator('.inventory_item').filter({hasText : item}).locator('button:has-text("Remove")');

            if (await removeButton.count()){
                await removeButton.click()
            }
        }
    }

    async checkoutItem(checkoutItem: boolean) {
        const cartButton = this.page.locator('.shopping_cart_link');
        const checkoutButton = this.page.locator('#checkout');
        const itemsAdded = this.page.locator('.cart_item');
        const itemNames = this.page.locator('.inventory_item_name');

        console.log("🛒 Opening cart...");
        await cartButton.click();

        const count = await itemsAdded.count();
        console.log(`🧾 Total items in cart: ${count}`);

        if (count === 0) {
            console.log("⚠️ No items in the cart. Nothing to checkout.");
            return;
        }

        // List all items in the cart
        console.log("📦 Items currently in the cart:");
        for (let i = 0; i < count; i++) {
            const name = await itemNames.nth(i).textContent();
            console.log(`   • ${name?.trim()}`);
        }

        // If checkoutItem = true → click checkout
        if (checkoutItem) {
            console.log("➡️ Proceeding to checkout...");
            await checkoutButton.click();
            await this.page.waitForURL('**/checkout-step-one.html');
            console.log("✅ Navigated to checkout page.");
        } else {
            console.log("🚫 Checkout skipped (checkoutItem = false).");
        }
    }
}