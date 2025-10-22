import { expect, Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { ProductListComponent } from './ProductListComponent';

export class CartContentsComponent extends BaseComponent {
  // Locators
  private readonly cartContentsLocator = (): Locator => this.page.locator('.cart_contents_container');
  private readonly productListComponent: ProductListComponent = new ProductListComponent(this.page);

  // Actions
  async checkProductName(): Promise<void> {
    await expect(this.cartContentsLocator().locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    /*
    const test = await (this.cartContentsLocator().locator('.inventory_item_name')).innerText();
    console.log(test);

    const test2 = await this.productListComponent.getProductNameFromProductList().innerText();
    console.log(test2);
    */
  }

  async openCheckoutPage(): Promise<void> {
    await this.cartContentsLocator().getByRole("button", { name: "checkout" }).click();
    expect(this.page.url()).toContain('/checkout-step-one.html');
  }
//testy robione 20.10.2025 - jeśli się nie przyda, to usunąć
  getProductNameFromCartContents(): Locator {
    return this.cartContentsLocator().locator('.inventory_item_name');
  }
}
