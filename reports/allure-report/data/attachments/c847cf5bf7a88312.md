# Test info

- Name: Bayer Global Website Navigation Flow
- Location: D:\Automation\tests\specs\globalsitenavigation.spec.ts:15:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: /^Crop Protection$/ }) resolved to 2 elements:
    1) <a class="menu-fade" href="/en/agriculture/crop-protection" data-drupal-link-system-path="node/28086">Crop Protection</a> aka locator('a').filter({ hasText: /^Crop Protection$/ })
    2) <a class="" data-drupal-link-system-path="node/30321" href="/en/agriculture/transparency-in-crop-protection">Crop Protection </a> aka getByRole('link', { name: 'Crop Protection' }).nth(1)

Call log:
  - waiting for getByRole('link', { name: /^Crop Protection$/ })

    at goToDiseaseManagement (D:\Automation\pages\basePage.ts:30:63)
    at D:\Automation\tests\specs\globalsitenavigation.spec.ts:22:3
```

# Page snapshot

```yaml
- link "Skip to content":
  - /url: "#content"
- banner:
  - img
  - paragraph: Health for all, Hunger for none
  - navigation:
    - link "English (EN)":
      - /url: /en/pharma/thrombosis
  - list:
    - listitem:
      - link "Locations":
        - /url: /en/locations
    - listitem:
      - link "Contact Us":
        - /url: /en/contact-us
  - link "Home":
    - /url: /en/
  - text: Bayer Global
  - list:
    - listitem:
      - link "This is Bayer":
        - /url: /en/this-is-bayer
    - listitem:
      - link "Health":
        - /url: /en/health-at-bayer
    - listitem:
      - link "Agriculture ":
        - /url: /en/agriculture-overview
      - link "Agriculture":
        - /url: https://www.bayer.com/en/agriculture
        - img "Agriculture"
      - paragraph: Bayer provides tailored solutions for farmers to plant, grow and protect their harvests using less land, water and energy.
      - list:
        - listitem:
          - link "Overview":
            - /url: /en/agriculture-overview
        - listitem:
          - link "Farmer Voice":
            - /url: /en/agriculture/farmer-voice
        - listitem:
          - link "Publications":
            - /url: /en/agriculture/publications
        - listitem:
          - link "Regenerative Agriculture":
            - /url: /en/agriculture/regenerativeag
          - list:
            - listitem:
              - link "Solutions":
                - /url: /en/agriculture/tailored-solutions
              - list:
                - listitem:
                  - link "Solutions":
                    - /url: /en/agriculture/tailored-solutions
                - listitem:
                  - link "Agriculture Biologicals":
                    - /url: /en/agriculture/agriculture-biologicals
                - listitem:
                  - link "Crop Protection":
                    - /url: /en/agriculture/crop-protection
                - listitem:
                  - link "Seeds & Traits":
                    - /url: /en/agriculture/seeds-traits
                - listitem:
                  - link "Digital Farming":
                    - /url: /en/agriculture/digital-farming-systems
                - listitem:
                  - link "Fruits & Vegetables":
                    - /url: /en/agriculture/fruits-vegetables
            - listitem:
              - link "Sustainability Targets":
                - /url: /en/agriculture/sustainability-commitments
            - listitem:
              - link "Carbon Ventures":
                - /url: /en/agriculture/climate-change
            - listitem:
              - link "The Crop Science Sustainability Progress Report":
                - /url: /en/sustainability-progress-report
            - listitem:
              - 'link "Regen Ag in the Field: Bayer ForwardFarming"':
                - /url: /en/agriculture/forwardfarming
        - listitem:
          - link "Advances in Agriculture":
            - /url: /en/agriculture/advances-agriculture
          - list:
            - listitem:
              - link "Farms of the Future":
                - /url: /en/agriculture/farms-of-the-future
            - listitem:
              - link "Innovation Pipeline":
                - /url: /en/agriculture/pipeline
            - listitem:
              - link "Collaborations & Open Innovation":
                - /url: /en/agriculture/collaborations
        - listitem:
          - link "Food Security":
            - /url: /en/agriculture/food-security
          - list:
            - listitem:
              - link "Beyond Growing More":
                - /url: /en/agriculture/beyond-growing-more
            - listitem:
              - link "Resilient Food Systems":
                - /url: /en/agriculture/resilient-food-systems
            - listitem:
              - link "Nutrition":
                - /url: /en/agriculture/nourishing-the-world
            - listitem:
              - link "Food Loss & Waste":
                - /url: /en/agriculture/food-loss-waste
            - listitem:
              - link "Food Chain Partnership":
                - /url: /en/agriculture/food-chain-partnership
        - listitem:
          - link "Products":
            - /url: /en/agriculture/products
          - list:
            - listitem:
              - link "Suppliers":
                - /url: /en/agriculture/suppliers-crop-science
            - listitem:
              - link "Counterfeits in Agriculture":
                - /url: /en/agriculture/counterfeits-in-agriculture
            - listitem:
              - link "Product Responsibility":
                - /url: /en/agriculture/taking-product-responsibility
            - listitem:
              - link "Product Stewardship":
                - /url: /en/agriculture/product-stewardship
            - listitem:
              - link "Product Supply":
                - /url: /en/agriculture/creating-sustainable-product-supply
        - listitem:
          - link "News & Stories":
            - /url: /en/agriculture/news-stories
          - list:
            - listitem:
              - link "Events":
                - /url: /en/agriculture/events
            - listitem:
              - link "Podcast":
                - /url: /en/agriculture/podcast
        - listitem:
          - link "Transparency":
            - /url: /en/agriculture/transparency-crop-science
          - list:
            - listitem:
              - link "Crop Protection":
                - /url: /en/agriculture/transparency-in-crop-protection
            - listitem:
              - link "GMO Crops":
                - /url: /en/agriculture/transparency-gmo-crops
            - listitem:
              - link "Plant Breeding":
                - /url: /en/agriculture/transparency-plant-breeding
            - listitem:
              - link "OpenLabs":
                - /url: /en/agriculture/open-labs
        - listitem:
          - link "Contact Us":
            - /url: /en/agriculture/contact-us-cropscience
        - listitem: SCROLL 
    - listitem:
      - link "Products":
        - /url: /en/products/products-overview
    - listitem:
      - link "Innovation":
        - /url: /en/innovation/science-research-and-innovation
    - listitem:
      - link "Sustainability":
        - /url: /en/sustainability/at-a-glance
    - listitem:
      - link "Media":
        - /url: /en/media-overview
    - listitem:
      - link "Investors":
        - /url: /en/investors-overview
    - listitem:
      - link "Career":
        - /url: /en/career
  - text: Close
- navigation "Breadcrumb":
  - heading "Breadcrumb" [level=2]
  - list:
    - listitem:
      - link "Home":
        - /url: https://www.bayer.com/en/
    - listitem:
      - link "Health":
        - /url: https://www.bayer.com/en/health-at-bayer
    - listitem:
      - link "Pharmaceuticals":
        - /url: https://www.bayer.com/en/pharma/pharmaceuticals
    - listitem:
      - link "Treatment Areas":
        - /url: https://www.bayer.com/en/pharma/treatment-areas
    - listitem:
      - link "Cardiology":
        - /url: https://www.bayer.com/en/pharma/cardiology
    - listitem: Thrombosis
- main:
  - article:
    - text: Cardiovascular Diseases
    - heading "Thrombosis" [level=1]
    - article:
      - img "A man in a green shirt is sitting at a desk."
    - paragraph:
      - strong: Thrombosis is the formation of a blood clot inside a blood vessel, blocking a vein (venous thrombosis) or artery (arterial thrombosis). In the EU, more people die from blood clots than from AIDS, breast cancer, prostate cancer and traffic accidents combined.
    - text: "Share:"
    - list:
      - listitem:
        - link "LinkedIn":
          - /url: http://www.linkedin.com/shareArticle?mini=true&url=https://www.bayer.com/en/pharma/thrombosis&title=thrombosis&source=https://www.bayer.com/en/pharma/thrombosis
      - listitem:
        - link "Email":
          - /url: "mailto:?subject=Page Recommendation: thrombosis&body=Hi, %0D%0A%0D%0A\n\nI’ve found an interesting page which I’d like to recommend to you:  https://www.bayer.com/en/pharma/thrombosis "
      - listitem:
        - link "Facebook":
          - /url: http://www.facebook.com/share.php?u=https://www.bayer.com/en/pharma/thrombosis&title=thrombosis
      - listitem:
        - link "X":
          - /url: https://twitter.com/intent/tweet?url=https://www.bayer.com/en/pharma/thrombosis&status=thrombosis+https://www.bayer.com/en/pharma/thrombosis
    - paragraph: "Venous and Arterial Thromboembolism is responsible for a number of serious and life threatening conditions:"
    - heading "Advice for patients" [level=3]
    - paragraph: Each body reacts differently to medicines. Therefore it is impossible to tell which medicine works best for you. Please consult your physician.
    - list:
      - listitem:
        - paragraph: "Venous Thromboembolism (VTE) is the third most common cardiovascular disease worldwide and is the most common avoidable cause of hospital death. VTE encompasses two conditions: deep vein thrombosis (DVT) and pulmonary embolism (PE). DVT is a blood clot that forms in the veins that lie deep within the muscles, for example in the leg or pelvis. If all or part of the DVT breaks off and the blood clot moves to block a vessel in the lungs, this is known as a PE, an event which can be rapidly fatal."
        - paragraph
      - listitem:
        - paragraph: "Symptoms of DVT include: pain, swelling, redness of the affected area, usually the leg and the skin may also be warm to the touch. Symptoms of PE include: acute shortness of breath, chest pain, rapid heart rate, some people may also cough blood"
        - paragraph
      - listitem:
        - paragraph: Arterial Thromboembolism occurs when oxygenated blood flow from the heart to another part of the body (via an artery) is interrupted by a blood clot. If this occurs in an artery supplying blood to the brain, it can lead to a stroke, an event that can be severely debilitating or fatal. If it occurs in a coronary artery, it can lead to acute coronary syndrome (ACS), which includes conditions such as myocardial infarction (heart attack), and unstable angina
    - paragraph
    - paragraph: Venous and Arterial Thromboembolism is responsible for increasing morbidity and mortality, and requires active or preventative treatment to avoid potentially serious or fatal patient outcomes. Bayer offers such a product that may be of benefit for these patients. It is important for doctors and patients to discuss all available treatment options to ensure the patient receives the best medication for him / her.
    - text: "Share:"
    - list:
      - listitem:
        - link "LinkedIn":
          - /url: http://www.linkedin.com/shareArticle?mini=true&url=https://www.bayer.com/en/pharma/thrombosis&title=thrombosis&source=https://www.bayer.com/en/pharma/thrombosis
      - listitem:
        - link "Email":
          - /url: "mailto:?subject=Page Recommendation: thrombosis&body=Hi, %0D%0A%0D%0A\n\nI’ve found an interesting page which I’d like to recommend to you:  https://www.bayer.com/en/pharma/thrombosis "
      - listitem:
        - link "Facebook":
          - /url: http://www.facebook.com/share.php?u=https://www.bayer.com/en/pharma/thrombosis&title=thrombosis
      - listitem:
        - link "X":
          - /url: https://twitter.com/intent/tweet?url=https://www.bayer.com/en/pharma/thrombosis&status=thrombosis+https://www.bayer.com/en/pharma/thrombosis
    - text: Discover More
    - link "LIVING WITH A DISEASE Heart Attack READ MORE":
      - /url: /en/pharma/heart-attack
      - article:
        - img "A doctor is talking to an elderly woman in a hospital bed."
      - text: LIVING WITH A DISEASE
      - heading "Heart Attack" [level=4]
      - article:
        - paragraph: Cardiovascular disease is the number-one cause of death in many industrialized countries. In 2012, cardiovascular disease resulted in 17.5 million deaths globally with this number estimated to increase to 23.6 million by the year 2030.
      - text: READ MORE
    - link "LIVING WITH A DISEASE Hemophilia READ MORE":
      - /url: /en/pharma/hematology
      - article:
        - img "A group of red blood cells floating in the air."
      - text: LIVING WITH A DISEASE
      - heading "Hemophilia" [level=4]
      - article:
        - paragraph: Hemophilia is a rare bleeding disorder where one of the clotting factors is missing or deficient that affects your blood’s ability to clot normally.
      - text: READ MORE
    - text: Links
    - paragraph:
      - img "thrombosis_2_0"
    - link " Product List":
      - /url: /en/products/products-from-A-to-Z
    - link " Beware of Counterfeits":
      - /url: /en/health/beware-of-counterfeits
- contentinfo:
  - text: "Last Updated:"
  - time: Tuesday, April 12, 2022
  - navigation "Our Business  Pharmaceuticals  Consumer Health  Crop Science  Our Products  Bayer Worldwide Magazines & Reports  News & Stories Stay Tuned  Job Postings  Latest News  Newsletter  Bayer Share Price":
    - list:
      - listitem:
        - text: Our Business
        - list:
          - listitem:
            - text: 
            - link "Pharmaceuticals":
              - /url: https://pharma.bayer.com/
          - listitem:
            - text: 
            - link "Consumer Health":
              - /url: /en/consumer-health/consumer-health-division-bayer
          - listitem:
            - text: 
            - link "Crop Science":
              - /url: https://www.cropscience.bayer.com/
          - listitem:
            - text: 
            - link "Our Products":
              - /url: /en/products/products-from-A-to-Z
          - listitem:
            - text: 
            - link "Bayer Worldwide":
              - /url: /en/worldwide/bayer-worldwide
      - listitem:
        - text: Magazines & Reports
        - list:
          - listitem:
            - text: 
            - link "News & Stories":
              - /url: /en/news-stories
      - listitem:
        - text: Stay Tuned
        - list:
          - listitem:
            - text: 
            - link "Job Postings":
              - /url: https://talent.bayer.com/careers?hl=en
          - listitem:
            - text: 
            - link "Latest News":
              - /url: https://www.bayer.com/media/en-us/
          - listitem:
            - text: 
            - link "Newsletter":
              - /url: https://www.bayer.com/media/en-us/newsletter-subscription/
          - listitem:
            - text: 
            - link "Bayer Share Price":
              - /url: /en/investors/shareholder-information
  - text: Get in Touch Do you have any queries or comments?
  - link "Global Form ":
    - /url: /en/contact-us
  - link "Report a side effect ":
    - /url: /en/health/report-side-effect
  - text: Follow Us
  - link "Facebook":
    - /url: http://www.facebook.com/Bayer
    - text: 
  - link "Twitter":
    - /url: http://twitter.com/bayer
    - text: 
  - link "YouTube":
    - /url: http://www.youtube.com/user/BayerTVinternational
    - text: 
  - link "LinkedIn":
    - /url: http://www.linkedin.com/company/bayer
    - text: 
  - link "Instagram":
    - /url: http://instagram.com/bayerofficial
    - text: 
  - link "RSS Feed":
    - /url: /rss
    - text: 
  - paragraph: Copyright © Bayer AG
  - navigation "Conditions of Use | Privacy Statement | Cookie Settings | Imprint | Modern Slavery Act Statement":
    - list:
      - listitem:
        - link "Conditions of Use":
          - /url: /en/conditions-of-use
        - text: "|"
      - listitem:
        - link "Privacy Statement":
          - /url: /en/privacy-statement
        - text: "|"
      - listitem:
        - link "Cookie Settings":
          - /url: ""
        - text: "|"
      - listitem:
        - link "Imprint":
          - /url: /en/imprint
        - text: "|"
      - listitem:
        - link "Modern Slavery Act Statement":
          - /url: /en/sustainability/bayer-modern-slavery-statement
  - link "Sitemap":
    - /url: /en/sitemap
- img
- status
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
  24 |   await expect(page.locator('[id="\\31 99131"]')).toContainText('Venous and Arterial Thromboembolism');
  25 | }
  26 |
  27 | export async function goToDiseaseManagement(page: Page) {
  28 |   await page.getByRole('link', { name: 'Agriculture' }).click();
  29 |   await page.getByRole('link', { name: 'Solutions' }).click();
> 30 |   await page.getByRole('link', { name: /^Crop Protection$/ }).click();
     |                                                               ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: /^Crop Protection$/ }) resolved to 2 elements:
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