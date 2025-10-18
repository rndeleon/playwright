import { Page, expect } from "@playwright/test";

export class ProductPage {
    readonly page: Page;

    constructor (page: Page){
        this.page = page;
    }

    async verifyPage(){
        await expect(this.page.locator('.title')).toHaveText('Products')
    }
}