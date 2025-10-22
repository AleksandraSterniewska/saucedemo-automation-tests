import { Page } from "@playwright/test";
import { CheckoutSummaryComponent } from "../components/CheckoutSummaryComponent";
import { HeaderComponent } from "../components/HeaderComponent";

export class OverviewPage {
  readonly headerPanel: HeaderComponent;
  readonly checkoutSummaryPanel: CheckoutSummaryComponent;

  constructor(protected page: Page) {
    this.headerPanel = new HeaderComponent(page);
    this.checkoutSummaryPanel = new CheckoutSummaryComponent(page);
  }
}