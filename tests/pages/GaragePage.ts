import { type Page } from '@playwright/test';

export class GaragePage {
  constructor(private readonly page: Page) {}

  get heading() {
    return this.page.getByRole('heading', { name: /garage/i });
  }

  async addCar(brand: string, model: string, mileage: string) {
    await this.page.getByRole('button', { name: 'Add car' }).click();
    await this.page.getByLabel('Brand').selectOption({ label: brand });
    await this.page.getByLabel('Model').selectOption({ label: model });
    await this.page.getByRole('spinbutton', { name: 'Mileage' }).fill(mileage);
    await this.page.getByRole('button', { name: 'Add' }).click();
  }

  car(name: string) {
    return this.page.getByText(name);
  }
}
