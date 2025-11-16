import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://movie-finder-d128b.web.app/login');

  await page.getByRole('textbox', { name: 'Email' }).fill('test@mail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('MMd4vEwEvDTi8ZZ');

  await Promise.all([
    page.waitForURL('https://movie-finder-d128b.web.app/'),
    page.getByRole('button', { name: 'Sign In' }).click(),
  ]);

  await page.waitForLoadState('networkidle');
});


test('History should save a searched prompt', async ({ page }) => {
  test.setTimeout(1500000);
  const searchInput = page.getByRole('textbox').last();
  await searchInput.fill('sport movies');
  await page.getByRole('button', { name: 'Search' }).click();

  await page.waitForSelector('text=Match Recommendations');

  await page.getByRole('button', { name: 'History' }).click();

  await expect(page.getByText(/sport movies/i)).toBeVisible();
});


test('History should save multiple search prompts', async ({ page }) => {
  
  test.setTimeout(1500000);
  const prompts = ['horror', 'romance', 'action'];

  for (const prompt of prompts) {
    const searchInput = page.getByRole('textbox').last();
    await searchInput.fill(prompt);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForSelector('text=Match Recommendations');
  }

  await page.getByRole('button', { name: 'History' }).click();

  await expect(
    page.getByRole('heading', { name: 'Search History' })
  ).toBeVisible();

  for (const prompt of prompts) {
    const historyItem = page
      .locator('div')
      .filter({
        hasText: new RegExp(`^${prompt}.*ago$`, 'i'),
      })
      .first();
  }
});


test('History should clear properly', async ({ page }) => {
  const searchInput = page.getByRole('textbox').last();
  await searchInput.fill('fantasy movies');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForSelector('text=Match Recommendations');

  await page.getByRole('button', { name: 'History' }).click();

  await page.getByRole('button', { name: 'Clear History' }).click();

  await expect(page.getByText(/No search history yet/i)).toBeVisible();
});

test('History should save new search after clearing', async ({ page }) => {
  test.setTimeout(1500000);
  
  const searchInput = page.getByRole('textbox').last();
  await searchInput.fill('indo movies');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForSelector('text=Match Recommendations');

  await page.getByRole('button', { name: 'History' }).click();
  await page.getByRole('button', { name: 'Clear History' }).click();

  await expect(page.getByText(/No search history yet/i)).toBeVisible();

  await page.getByRole('button', { name: 'Close' }).click();

  const searchInputAfterClear = page.getByRole('textbox').last();
  await searchInputAfterClear.fill('sci-fi movies');
  await page.getByRole('button', { name: 'Search' }).click();
 
  await page.waitForSelector('text=Match Recommendations', { timeout: 1500000 });
  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: 'History' }).click();

  await expect(
    page.getByText(/sci-fi movies/i)
  ).toBeVisible({ timeout: 1500000 });
});

