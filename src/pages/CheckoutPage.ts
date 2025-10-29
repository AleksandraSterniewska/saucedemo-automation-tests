import { Page } from "@playwright/test";
import { CheckoutFormComponent } from "../components/CheckoutFormComponent";
import { HeaderComponent } from "../components/HeaderComponent";

export class CheckoutPage {
  readonly headerPanel: HeaderComponent;
  readonly checkoutFormPanel: CheckoutFormComponent;

  constructor(protected page: Page) {
    this.headerPanel = new HeaderComponent(page);
    this.checkoutFormPanel = new CheckoutFormComponent(page);
  }
}