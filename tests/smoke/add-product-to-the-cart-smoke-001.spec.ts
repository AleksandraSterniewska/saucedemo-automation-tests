import { expect, test } from '../../src/fixtures/po.fixture';
import { RemoveButtonModel } from '../../src/models/remove-button.model';
import { ShoppingCartModel } from '../../src/models/shopping-cart.model';

test.afterEach(async ({ homePage }) => {
  await homePage.productListPanel.removeProductFromCart();
});

test('should add product and remove it from the cart', { tag: '@addProduct' }, async ({ homePage }) => {
  // Arrange
  const removeButton: RemoveButtonModel = {
    name: 'Remove',
    color: 'rgb(226, 35, 26)',
  };

  const shoppingCart: ShoppingCartModel = {
    productsAmount: '1',
  };

  // Act
  await homePage.open();
  await homePage.productListPanel.addProductToCart();

  // Assert
  await expect(homePage.productListPanel.getRemoveButton()).toBeVisible();
  await expect(homePage.productListPanel.getRemoveButton()).toContainText(removeButton.name);
  await expect(homePage.productListPanel.getRemoveButton()).toHaveCSS('color', removeButton.color);
  await expect(homePage.headerPanel.getShoppingCartBadge()).toContainText(shoppingCart.productsAmount);
});
