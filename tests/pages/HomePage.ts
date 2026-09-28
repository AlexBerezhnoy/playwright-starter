import { type Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('/');
  }

  async loginAsGuest() {
    await this.page.getByRole('button', { name: /guest log in/i }).click();
  }
}
