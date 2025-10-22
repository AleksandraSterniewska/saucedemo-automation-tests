import { expect, Locator } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";

export class CheckoutCompleteComponent extends BaseComponent {
  // Locators
  private readonly checkoutCompleteLocator = (): Locator => this.page.locator('.checkout_complete_container');

  // Actions
  async checkOrderStatus(): Promise<void> {
    await expect(this.checkoutCompleteLocator().locator('.complete-text')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }

  getCompleteText(): Locator {
    return this.checkoutCompleteLocator().locator('.complete-text');
  }
}