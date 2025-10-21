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

    async checkoutItem(){
        const cartButton = this.page.locator('.shopping_cart_link');
        await cartButton.click();
    }
}