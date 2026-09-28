import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { GaragePage } from './pages/GaragePage';

test('guest can add Audi TT to Garage', async ({ page }) => {
  const homePage = new HomePage(page);
  const garagePage = new GaragePage(page);

  await homePage.open();
  await homePage.loginAsGuest();
  await garagePage.addCar('Audi', 'TT', '12000');

  await expect(garagePage.car('Audi TT')).toBeVisible();
});
