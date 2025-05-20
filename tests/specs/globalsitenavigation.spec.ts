import { test } from '@playwright/test';
import {
  acceptCookies,
  goToAgricultureReadMore,
  goToScalingRegenerative,
  navigateToThrombosis,
  goToDiseaseManagement,
  openInnovationPage,
  goToInvestorsSection,
  goToCareerSection
} from '../../pages/basePage'

test('Bayer Global Website Navigation Flow', async ({ page }) => {
  await page.goto('https://www.bayer.com/en/');

  await acceptCookies(page);
  await goToAgricultureReadMore(page);
  await goToScalingRegenerative(page);
  await navigateToThrombosis(page);
  await goToDiseaseManagement(page);
  await openInnovationPage(page);
  await goToInvestorsSection(page);
  await goToCareerSection(page);
});
