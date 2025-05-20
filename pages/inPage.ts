import { Page, expect } from '@playwright/test';

export async function acceptCookies(page: Page) {
  await page.getByRole('button', { name: 'Accept Cookies ' }).click();
}

export async function clickShowMore(page: Page) {
  await page.getByRole('link', { name: 'Show More' }).click();
}

export async function goToYearsInIndia(page: Page) {
  await page.getByRole('link', { name: 'This is Bayer' }).click();
  await page.getByRole('link', { name: 'years in India' }).click();
  await expect(page.locator('h1')).toContainText('125 Years of Bayer in India');
}

export async function goToProductOverview(page: Page) {
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Products' }).click();
  await page.locator('#block-header-section').getByRole('link', { name: 'Overview' }).click();
  await expect(page.locator('h1')).toContainText('Product areas');
}

export async function goToAgriculturePartner(page: Page) {
  await page.getByRole('link', { name: 'Agriculture A partner for' }).click();
}

export async function goToHomeLogo(page: Page) {
  await page.getByRole('link', { name: 'Bayer_logo_static' }).click();
}

export async function clickHomeInitiativesImage(page: Page) {
  await page.getByRole('img', { name: 'home-breakthrough-initiatives' }).click();
}
