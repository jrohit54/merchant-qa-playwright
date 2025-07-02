import { expect, Page, Locator } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToCampaignSection() {
    const closeButtons = this.page.locator('button', { hasText: 'close' });
    await expect(this.page.getByRole('button', { name: 'close' })).toBeVisible();
    await this.page.getByRole('button', { name: 'close' }).click();
    await expect(this.page.getByRole('button', { name: 'close' })).toBeVisible();
    await this.page.getByRole('button', { name: 'close' }).click();
    await expect(this.page.getByRole('button', { name: 'Campaigns', exact: true })).toBeVisible();
    await this.page.getByRole('button', { name: 'Campaigns', exact: true }).click();
    await expect(this.page.getByRole('button', { name: 'Active' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Draft' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Approve' })).toBeVisible();
  }

  async createNewCampaign() {
    await expect(this.page.getByRole('button', { name: 'New Campaign' })).toBeVisible();
    await this.page.getByRole('button', { name: 'New Campaign' }).click();
    await this.page.getByRole('button', { name: 'Create a new campaign' }).click();
    await expect(this.page.getByText('BookableRecommendedCustomers')).toBeVisible();
    await expect(this.page.getByText('Non BookableBooking')).toBeVisible();
    await this.page.getByText('Non BookableBooking').click();
    await expect(this.page.getByRole('link', { name: '+ Add services' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Build campaign' })).toBeVisible();
  }
}