import { Locator } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";

export class CheckoutCompleteComponent extends BaseComponent {
  // Locators
  private readonly checkoutCompleteLocator = (): Locator => this.page.locator('.checkout_complete_container');

  // Actions
  getCompleteText(): Locator {
    return this.checkoutCompleteLocator().locator('.complete-text');
  }
}