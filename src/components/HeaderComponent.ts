import { expect, Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class HeaderComponent extends BaseComponent {
  // Locators
  private readonly headerLocator = (): Locator => this.page.locator('#header_container');

  // Actions
  getShoppingCartBadge(): Locator {
    return this.headerLocator().locator('.shopping_cart_badge');
  }

  async openShoppingCartPage(): Promise<void> {
    await this.headerLocator().locator('.shopping_cart_container').click();
    expect(this.page.url()).toContain('/cart.html');
  }
}
