import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { GaragePage } from './pages/GaragePage';

test('guest can open Garage', async ({ page }) => {
  const homePage = new HomePage(page);
  const garagePage = new GaragePage(page);

  await homePage.open();
  await homePage.loginAsGuest();
  await expect(page).toHaveURL(/panel\/garage/);
  await expect(garagePage.heading).toBeVisible();
});
