import { expect, Page } from '@playwright/test';
import { Logger } from 'tslog';

export abstract class BasePage {
  protected log = new Logger();
  protected url = '/inventory.html';

  constructor(protected page: Page) {}

  async open(): Promise<void> {
    await this.page.goto(this.url);
    await expect(this.page.locator('.header_container')).toBeVisible();
    await expect(this.page.locator('.inventory_container')).toBeVisible();
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}
