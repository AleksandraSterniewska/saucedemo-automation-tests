import { expect, test } from "../../src/fixtures/po.fixture";
import { CartPage } from "../../src/pages/CartPage";

test('should order product', { tag: '@orderProduct' }, async ({ homePage }) => {
  // Arrange
  
  // Act
  await homePage.open();
  await homePage.productListPanel.addProductToCart();

  //await homePage.headerPanel.openShoppingCartPage();
  //await cartPage.cartContentsPanel.checkProductName();

  //await expect(homePage.locator('.inventory_item_name')).

  
  // Assert
  //expect(cartPage).toContain('swag');
});