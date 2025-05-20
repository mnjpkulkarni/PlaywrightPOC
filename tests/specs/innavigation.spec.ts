import { test } from '@playwright/test';
import {
  acceptCookies,
  clickShowMore,
  goToYearsInIndia,
  goToProductOverview,
  goToAgriculturePartner,
  goToHomeLogo,
  clickHomeInitiativesImage
} from '../../pages/inPage';

test('Validate Bayer site homepage navigation flow', async ({ page }) => {
  await page.goto('https://www.bayer.in/en/');
  
  await acceptCookies(page);
  await clickShowMore(page);
  await goToYearsInIndia(page);
  await goToProductOverview(page);
  await goToAgriculturePartner(page);
  await goToHomeLogo(page);
  await clickHomeInitiativesImage(page);
});
