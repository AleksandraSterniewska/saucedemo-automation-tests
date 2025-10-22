import { expect, Locator } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";
import { CheckoutOverviewModel } from "../models/checkout-overview.model";

export class CheckoutSummaryComponent extends BaseComponent {
  // Locators
  private readonly checkoutSummaryLocator = (): Locator => this.page.locator('#checkout_summary_container');
  private readonly summaryValueLocator = (): Locator => this.checkoutSummaryLocator().locator('.summary_value_label');

  // Actions
  async checkPaymentInfo(overview: CheckoutOverviewModel): Promise<void> {
    await expect(this.summaryValueLocator().first()).toContainText(overview.paymentInfo);
    await expect(this.summaryValueLocator().locator('nth=1')).toContainText(overview.shippingInfo);
    await expect(this.checkoutSummaryLocator().locator('.summary_total_label')).toContainText(overview.total);
  }

  async openCompletePage(): Promise<void> {
    await this.checkoutSummaryLocator().getByRole("button", { name: 'finish' }).click();
    expect(this.page.url()).toContain('/checkout-complete.html');
  }
}