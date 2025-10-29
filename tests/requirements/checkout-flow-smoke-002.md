### Test ID: SMOKE-002

### Test Description: Checkout flow

#### Test Objective:

The objective of this test is to verify that a user can successfully complete the order process in the Sauce Demo application.

#### Steps to Perform:

1. **Navigate to the "Swag Labs" page:**
   - Go to the main page of the Sauce Demo application that displays list of products.

2. **Add a product to the cart:**
   - Click the "Add to cart" button below the product description.

3. **Open the cart with the added product:**
   - Click on the shopping cart icon displayed to the right side of the header.
   - Check title of the added product on the "Your Cart" page. Compare this title with the name of the added product on the product list page.

4. **Go to the checkout page and fill out of the form:**
   - Click "Checkout" button on the "Your Cart" page.
   - Enter the first name **"Alex"**.
   - Enter the last name **"Smith"**.
   - Enter the zip/postal code **"00-000"**.
   - Click "Continue" button.
   - Check title of the added product on the "Checkout: Overview" page. Compare this title with the name of the added product on the product list page.
   - Check the values under the heading: *"Payment Information"*, *"Shipping Information"*, *"Total"*.

5. **Finish the order process:**
   - Click "Finish" button.

#### Expected Result:

- The order process is successfully complete. The "Checkout: Complete" page is displayed with information: "Your order has been dispatched, and will arrive just as fast as the pony can get there!".
- The product is not located in the cart. The quantity of the product ordered is not displayed on the shopping cart icon.

#### Pre-Requirements:

- The user must be logged in beforehand to access the "Swag Labs" page and successfully complete the order.

#### Additional Notes:

- If the product is in cart on the "Checkout: Complete" page, ensure that the test does not leave any residual data by removing the added products from the cart.