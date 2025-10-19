import { Page } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";
import { CartBasePage } from "./CartBasePage";
import { CartContentsComponent } from "../components/CartContentsComponent";

export class CartPage extends CartBasePage {
  //readonly productListPanel: ProductListComponent;
  readonly headerPanel: HeaderComponent; // czy mogę użyć header component z poprzedniej strony?
  readonly cartContentsPanel: CartContentsComponent;

  constructor(protected page: Page) {
    super(page);
    this.headerPanel = new HeaderComponent(page);
    this.cartContentsPanel = new CartContentsComponent(page);
  }
}

//to może być do zmiany, jak nie do usunięcia