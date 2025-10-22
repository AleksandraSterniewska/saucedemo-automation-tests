import { expect, test } from '@playwright/test';
import { CheckoutInformationModel } from '../../src/models/checkout-information.model';
import { CheckoutOverviewModel } from '../../src/models/checkout-overview.model';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';
import { CompletePage } from '../../src/pages/CompletePage';
import { HomePage } from '../../src/pages/HomePage';
import { OverviewPage } from '../../src/pages/OverviewPage';

test('should order product', { tag: '@orderProduct' }, async ({ page }) => {
  // Arrange
  const homePage: HomePage = new HomePage(page);
  const cartPage: CartPage = new CartPage(page);
  const checkoutPage: CheckoutPage = new CheckoutPage(page);
  const overviewPage: OverviewPage = new OverviewPage(page);
  const completePage: CompletePage = new CompletePage(page);

  const form: CheckoutInformationModel = {
    firstName: 'Alex',
    lastName: 'Smith',
    postalCode: '00-000',
  };

  const overview: CheckoutOverviewModel = {
    paymentInfo: 'SauceCard #31337',
    shippingInfo: 'Free Pony Express Delivery!',
    total: '$32.39',
  };

  const completeStatus = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';

  // Act
  // 1. **Navigate to the "Swag Labs" page:**
  await homePage.open();
  // 2. **Add a product to the cart:**
  await homePage.productListPanel.addProductToCart();
  // 3. **Open the cart with the added product:**
  await homePage.headerPanel.openShoppingCartPage();
  await cartPage.cartContentsPanel.checkProductName(); // tutaj dodać porównanie nazwy produktu ze strony startowej na stronie z koszykiem - obgadać to z Łukaszem, już nie mam pomysłów :(

  // 4. **Go to the checkout page and fill out of the form:**
  await cartPage.cartContentsPanel.openCheckoutPage();
  await checkoutPage.checkoutFormPanel.fillCheckoutForm(form);
  await checkoutPage.checkoutFormPanel.openOverviewPage();
  await overviewPage.checkoutSummaryPanel.checkPaymentInfo(overview);

  // 5. **Finish the order process:**
  await overviewPage.checkoutSummaryPanel.openCompletePage();

  // Assert
  await completePage.checkoutCompletePanel.checkOrderStatus();
  await expect(completePage.checkoutCompletePanel.getCompleteText()).toContainText(completeStatus);
  await expect(completePage.headerPanel.getShoppingCartBadge()).toBeHidden();
});
