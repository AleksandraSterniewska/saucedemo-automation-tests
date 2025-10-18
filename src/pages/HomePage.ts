import { Page } from "@playwright/test";
import { ProductListComponent } from "../components/ProductListComponent";
import { BasePage } from "./BasePage";
import { HeaderComponent } from "../components/HeaderComponent";

export class HomePage extends BasePage {
  readonly productListPanel: ProductListComponent;
  readonly headerPanel: HeaderComponent;

  constructor(protected page: Page) {
    super(page);
    this.productListPanel = new ProductListComponent(page);
    this.headerPanel = new HeaderComponent(page);
  }
}