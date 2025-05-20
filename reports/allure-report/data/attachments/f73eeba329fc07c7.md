# Test info

- Name: Bayer Global Website Navigation Flow
- Location: D:\Automation\tests\specs\globalsitenavigation.spec.ts:15:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('[id="\\31 99131"]')
Expected string: "Venous and Arterial Thromboembolism"
Received: <element(s) not found>
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('[id="\\31 99131"]')
    - waiting for navigation to finish...

    at navigateToThrombosis (D:\Automation\pages\basePage.ts:24:51)
    at D:\Automation\tests\specs\globalsitenavigation.spec.ts:21:3
```

# Test source

```ts
   1 | import { Page, expect } from '@playwright/test';
   2 |
   3 | export async function acceptCookies(page: Page) {
   4 |   const acceptButton = page.getByRole('button', { name: 'Accept Cookies ' });
   5 |   await acceptButton.waitFor({ state: 'visible', timeout: 15000 });  // wait up to 15 seconds
   6 |   await acceptButton.click();
   7 |   await expect(page.locator('#block-header-section')).toContainText('Global');
   8 | }
   9 |
  10 | export async function goToAgricultureReadMore(page: Page) {
  11 |   await page.getByRole('link', { name: 'Agriculture Read More' }).click();
  12 |   await expect(page.locator('[id="\\35 26946"]')).toContainText('“Producing more while restoring more”');
  13 | }
  14 |
  15 | export async function goToScalingRegenerative(page: Page) {
  16 |   await page.getByRole('link', { name: 'Scaling Regenerative' }).click();
  17 | }
  18 |
  19 | export async function navigateToThrombosis(page: Page) {
  20 |   await page.getByRole('link', { name: 'Health' }).click();
  21 |   await page.getByRole('link', { name: 'Treatment Areas' }).click();
  22 |   await page.getByRole('link', { name: 'Cardiology' }).click();
  23 |   await page.getByRole('link', { name: 'Thrombosis' }).click();
> 24 |   await expect(page.locator('[id="\\31 99131"]')).toContainText('Venous and Arterial Thromboembolism');
     |                                                   ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  25 | }
  26 |
  27 | export async function goToDiseaseManagement(page: Page) {
  28 |   await page.getByRole('link', { name: 'Agriculture' }).click();
  29 |   await page.getByRole('link', { name: 'Solutions' }).click();
  30 |   await page.getByRole('link', { name: /^Crop Protection$/ }).click();
  31 |   await page.getByRole('link', { name: 'Disease Management' }).click();
  32 |   await expect(page.locator('h1')).toContainText('Fighting Disease – Inside and Out');
  33 | }
  34 |
  35 | export async function goToDigitalFarming(page: Page) {
  36 |   await page.getByRole('link', { name: ' Learn how digital farming' }).click();
  37 |   await expect(page.locator('h1')).toContainText('Smart Solutions for a Sustainable Future');
  38 | }
  39 |
  40 | export async function openInnovationPage(page: Page) {
  41 |   await page.getByRole('link', { name: 'Innovation' }).click();
  42 |   await page.getByRole('link', { name: 'Open Innovation and Engagement' }).click();
  43 |   await expect(page.locator('h1')).toContainText('Open Innovation and Collaboration');
  44 | }
  45 |
  46 | export async function playLeapsVideo(page: Page) {
  47 |   const videoFrame = await page.frameLocator('iframe[title*="Leaps by Bayer"]').frame();
  48 |   await videoFrame.getByRole('button', { name: 'Play' }).click();
  49 |   await videoFrame.getByRole('button', { name: 'Pause keyboard shortcut k' }).click();
  50 | }
  51 |
  52 | export async function goToInvestorsSection(page: Page) {
  53 |   await page.getByRole('link', { name: 'Investors' }).click();
  54 |   await page.getByRole('link', { name: "Annual Stockholders' Meeting" }).click();
  55 |   await page.getByRole('link', { name: 'Notice of the Meeting & Agenda' }).click();
  56 |   await expect(page.locator('h1')).toContainText('Notice of the Meeting & Agenda');
  57 | }
  58 |
  59 | export async function goToCareerSection(page: Page) {
  60 |   await page.getByRole('link', { name: 'Career' }).click();
  61 |   await page.getByRole('link', { name: 'Your health benefits' }).click();
  62 |   await expect(page.locator('[id="\\35 44841"]')).toContainText('Join Us in Creating a Healthier and Happier Workplace');
  63 | }
  64 |
```