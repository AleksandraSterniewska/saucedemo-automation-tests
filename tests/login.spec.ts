import { expect, test } from '@playwright/test';

test.skip('login to swag labs account', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const email = process.env.USER_EMAIL;
  const password = process.env.USER_PASSWORD;

  if (!email || !password) {
    throw new Error('🛑 Missing USER_EMAIL or USER_PASSWORD in .env file!');
  }

  await page.getByPlaceholder('Username').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.locator('.submit-button').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');

  await page.context().storageState({ path: 'tmp/login.json' });
});

test.skip('should be logged in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
});
