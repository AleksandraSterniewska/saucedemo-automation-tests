import { Page } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";
import { CartBasePage } from "./CartBasePage";
import { CartContentsComponent } from "../components/CartContentsComponent";

export class CartPage extends CartBasePage {
  readonly headerPanel: HeaderComponent;
  readonly cartContentsPanel: CartContentsComponent;

  constructor(protected page: Page) {
    super(page);
    this.headerPanel = new HeaderComponent(page);
    this.cartContentsPanel = new CartContentsComponent(page);
  }
}