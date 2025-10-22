import { expect, Locator } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";
import { CheckoutInformationModel } from "../models/checkout-information.model";

export class CheckoutFormComponent extends BaseComponent {
  // Locators
  private readonly checkoutInfoLocator = (): Locator => this.page.locator('#checkout_info_container');

  // Actions
  async fillCheckoutForm(form: CheckoutInformationModel): Promise<void> {
    await this.checkoutInfoLocator().getByPlaceholder('First Name').fill(form.firstName);
    await this.checkoutInfoLocator().getByPlaceholder('Last Name').fill(form.lastName);
    await this.checkoutInfoLocator().getByPlaceholder('Zip/Postal Code').fill(form.postalCode);
  }

  async openOverviewPage(): Promise<void> {
    await this.checkoutInfoLocator().locator('.submit-button').click();
    expect(this.page.url()).toContain('/checkout-step-two.html');
  }
}