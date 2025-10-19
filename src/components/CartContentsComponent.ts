import { expect, Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class CartContentsComponent extends BaseComponent {
  // Locators
  private readonly cartContentsLocator = (): Locator => this.page.locator('.cart_contents_container');

  // Actions
  async checkProductName(): Promise<void> {
    await expect(this.cartContentsLocator().locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  }

}
