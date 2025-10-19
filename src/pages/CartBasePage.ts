import { expect, Page } from '@playwright/test';
import { Logger } from 'tslog';

export abstract class CartBasePage {
  protected log = new Logger();
  protected url = '/cart.html';

  constructor(protected page: Page) {}

  async open(): Promise<void> {
    await this.page.goto(this.url);
    await expect(this.page.locator('.header_container')).toBeVisible();
    await expect(this.page.locator('.cart_contents_container')).toBeVisible();
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}

//to może być do zmiany, jak nie do usunięcia