import { expect, Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { ProductListComponent } from './ProductListComponent';

export class CartContentsComponent extends BaseComponent {
  // Locators
  private readonly cartContentsLocator = (): Locator => this.page.locator('.cart_contents_container');
  private readonly productListComponent: ProductListComponent = new ProductListComponent(this.page);

  // Actions
  async checkProductName(productNameFromProductList: string): Promise<void> {
    await expect(this.cartContentsLocator().locator('.inventory_item_name')).toHaveText(productNameFromProductList);
  }

  async openCheckoutPage(): Promise<void> {
    await this.cartContentsLocator().getByRole('button', { name: 'checkout' }).click();
    expect(this.page.url()).toContain('/checkout-step-one.html');
  }
}
