import { test, expect } from '@playwright/test';

test('Login Success', async ({ page }) => {
  await page.goto('https://movie-finder-d128b.web.app/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@mail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('MMd4vEwEvDTi8ZZ');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();

  await page.waitForURL('https://movie-finder-d128b.web.app/login');

  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});
