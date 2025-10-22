import { Page } from "@playwright/test";
import { CheckoutCompleteComponent } from "../components/CheckoutCompleteComponent";
import { HeaderComponent } from "../components/HeaderComponent";

export class CompletePage {
  readonly headerPanel: HeaderComponent;
  readonly checkoutCompletePanel: CheckoutCompleteComponent;

  constructor(protected page: Page) {
    this.headerPanel = new HeaderComponent(page);
    this.checkoutCompletePanel = new CheckoutCompleteComponent(page);
  }
}