import { expect, Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { HeaderComponent } from './HeaderComponent';

export class ProductListComponent extends BaseComponent {
  // Locators
  private readonly productListLocator = (): Locator => this.page.locator('#inventory_container');
  private readonly addToCartButtonLocator = (): Locator =>
    this.productListLocator().locator('#add-to-cart-sauce-labs-backpack');
  private readonly removeButtonLocator = (): Locator => this.productListLocator().locator('#remove-sauce-labs-backpack');
  private readonly headerComponents: HeaderComponent = new HeaderComponent(this.page);

  // Actions
  async addProductToCart(): Promise<void> {
    await this.addToCartButtonLocator().click();
  }

  async removeProductFromCart(): Promise<void> {
    await this.removeButtonLocator().click();
    await expect(this.headerComponents.getShoppingCartBadge()).not.toBeVisible();
  }

  getRemoveButton(): Locator {
    return this.removeButtonLocator();
  }
}
