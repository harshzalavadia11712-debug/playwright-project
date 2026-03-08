import { Page, expect } from '@playwright/test';

export class HomePage {

  constructor(private page: Page) {}

  inventoryTitle = '.title';

  async verifyLoginSuccess() {
    await expect(this.page.locator(this.inventoryTitle)).toHaveText('Products');
  }

}