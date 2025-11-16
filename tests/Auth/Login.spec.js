import { test, expect } from '@playwright/test';

test('Login Success', async ({ page }) => {
  await page.goto('https://movie-finder-d128b.web.app/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@mail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('MMd4vEwEvDTi8ZZ');
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test('Login Failed - Wrong Password', async ({ page }) => {
  await page.goto('https://movie-finder-d128b.web.app/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@mail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('MMd4vEwEvDTiZZ');
  await page.getByRole('button', { name: 'Sign In' }).click();

  const toast = page.getByText(/Invalid login credentials/i);
  await expect(toast).toBeVisible();
});
