import { Page, expect } from '@playwright/test';

export async function acceptCookies(page: Page) {
  const acceptButton = page.getByRole('button', { name: 'Accept Cookies ' });
  await acceptButton.waitFor({ state: 'visible', timeout: 15000 });  // wait up to 15 seconds
  await acceptButton.click();
  await expect(page.locator('#block-header-section')).toContainText('Global');
}

export async function goToAgricultureReadMore(page: Page) {
  await page.getByRole('link', { name: 'Agriculture Read More' }).click();
  await expect(page.locator('[id="\\35 26946"]')).toContainText('“Producing more while restoring more”');
}

export async function goToScalingRegenerative(page: Page) {
  await page.getByRole('link', { name: 'Scaling Regenerative' }).click();
}

export async function navigateToThrombosis(page: Page) {
  await page.getByRole('link', { name: 'Health' }).click();
  await page.getByRole('link', { name: 'Treatment Areas' }).click();
  await page.getByRole('link', { name: 'Cardiology' }).click();
  await page.getByRole('link', { name: 'Thrombosis' }).click();
  await expect(page.locator('[id="\\31 99131"]')).toContainText('Venous and Arterial Thromboembolism');
}

export async function goToDiseaseManagement(page: Page) {
  await page.getByRole('link', { name: 'Agriculture' }).click();
  await page.getByRole('link', { name: 'Solutions' }).click();
  //await page.getByRole('link', { name: /^Crop Protection$/ }).click();
  await page.getByRole('link', { name: 'Disease Management' }).click();
  await expect(page.locator('h1')).toContainText('Fighting Disease – Inside and Out');
}

export async function goToDigitalFarming(page: Page) {
  await page.getByRole('link', { name: ' Learn how digital farming' }).click();
  await expect(page.locator('h1')).toContainText('Smart Solutions for a Sustainable Future');
}

export async function openInnovationPage(page: Page) {
  await page.getByRole('link', { name: 'Innovation' }).click();
  await page.getByRole('link', { name: 'Open Innovation and Engagement' }).click();
  await expect(page.locator('h1')).toContainText('Open Innovation and Collaboration');
}

export async function playLeapsVideo(page: Page) {
  const videoFrame = await page.frameLocator('iframe[title*="Leaps by Bayer"]').frame();
  await videoFrame.getByRole('button', { name: 'Play' }).click();
  await videoFrame.getByRole('button', { name: 'Pause keyboard shortcut k' }).click();
}

export async function goToInvestorsSection(page: Page) {
  await page.getByRole('link', { name: 'Investors' }).click();
  await page.getByRole('link', { name: "Annual Stockholders' Meeting" }).click();
  await page.getByRole('link', { name: 'Notice of the Meeting & Agenda' }).click();
  await expect(page.locator('h1')).toContainText('Notice of the Meeting & Agenda');
}

export async function goToCareerSection(page: Page) {
  await page.getByRole('link', { name: 'Career' }).click();
  await page.getByRole('link', { name: 'Your health benefits' }).click();
  await expect(page.locator('[id="\\35 44841"]')).toContainText('Join Us in Creating a Healthier and Happier Workplace');
}
