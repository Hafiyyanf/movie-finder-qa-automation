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

test('Search with valid prompt', async ({ page }) => {
  
  const searchInput = page.getByRole('textbox').last();
  await searchInput.fill('horror movies');

  await page.getByRole('button', { name: 'Search' }).click();

  await page.waitForSelector('text=Match Recommendations');

  const movie = page.getByText(/conjuring/i);
  await expect(movie).toBeVisible();
});

  test('Search with long prompt', async ({ page }) => {
  
  const searchInput = page.getByRole('textbox').last();
  await searchInput.fill('film yang nyeritain tentang produser musik yang suatu hari dia masuk ke bar dan dengerin seorang perempuan yang menyanyikan lagu buatan dia, lalu dia dalam keaadaan mabuk dia sambil membayangkan lagunya sambil di iringi sebuah band.');

  await page.getByRole('button', { name: 'Search' }).click();

  await page.waitForSelector('text=Match Recommendations');

  const movie = page.getByText(/Begin Again/i);
  await expect(movie).toBeVisible();
  });

  test('Search with typo prompt', async ({ page }) => {
  
  const searchInput = page.getByRole('textbox').last();
  await searchInput.fill('film kyk interstlr tp bkn itu, luar angkisa.');

  await page.getByRole('button', { name: 'Search' }).click();

  await page.waitForSelector('text=Match Recommendations');

  const movie = page.getByText(/The Martian/i);
  await expect(movie).toBeVisible();
  });

 test('Search no results', async ({ page }) => {

  const searchInput = page.getByRole('textbox').last();
  await searchInput.fill('asasdasdasd');

  await page.getByRole('button', { name: 'Search' }).click();

  const alertBox = page.getByRole('alert');

  await expect(alertBox).toBeVisible();

  await expect(
    page.getByText(/no movie found matching/i)
  ).toBeVisible();
  });

test('Search out of context prompt', async ({ page }) => {
  
  const searchInput = page.getByRole('textbox').last();
  await searchInput.fill('Cara Memasak Nasi Goreng');

  await page.getByRole('button', { name: 'Search' }).click();

  await page.waitForSelector('text=Match Recommendations');

  const movie = page.getByText(/chef/i);
  await expect(movie).toBeVisible();
});