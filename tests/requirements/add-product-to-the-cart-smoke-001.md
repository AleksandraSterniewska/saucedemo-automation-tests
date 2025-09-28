### Test ID: SMOKE-001

### Test Description: Add product to the cart

#### Test Objective:

The objective of this test is to verify that a user can successfully add product to the cart in the Sauce Demo application.

#### Steps to Perform:

1. **Navigate to the "Swag Labs" page:**

   - Go to the main page of the Sauce Demo application that displays list of products.

2. **Add a product to the cart:**

   - Click the "Add to cart" button below the product description.

#### Expected Result:

- "Add to cart" button is changed to the "Remove" button. Additionally, the color of the border and button text has changed from black to red.
- The number of added products is displayed on the shopping cart icon.
- The test cleans up after execution by removing the added products from the cart.

#### Pre-Requirements:

- The user must be logged in beforehand to access the "Swag Labs" page and add products to the cart.

#### Additional Notes:

- Ensure that the test does not leave any residual data by removing the added products from the cart.