import { expect, Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async internalLogin(username: string, password: string, permalink: string) {
    await this.page.getByRole('textbox', { name: 'Username' }).click();
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('button', { name: 'Next' }).click();
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Verify' }).click();
  
  }
}