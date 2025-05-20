# Test info

- Name: Validate Bayer site homepage navigation flow
- Location: D:\Automation\tests\specs\innavigation.spec.ts:12:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Products' })
    - locator resolved to <a class="default" href="/en/products" data-drupal-link-system-path="node/146">Products</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable

    at goToProductOverview (D:\Automation\pages\inPage.ts:18:55)
    at D:\Automation\tests\specs\innavigation.spec.ts:18:28
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
      - /url: /en/thisisbayer/125-years-of-bayer-in-india
  - list:
    - listitem:
      - link "Bayer Global":
        - /url: https://www.bayer.com/
    - listitem:
      - link "Locations":
        - /url: /en/locations
    - listitem:
      - link "Contact Us":
        - /url: /thisisbayer/SSL/contact-us/
  - link "Home":
    - /url: /en/
    - img "Home"
  - text: Bayer India
  - list:
    - listitem:
      - link "This is Bayer":
        - /url: /en/thisisbayer
    - listitem:
      - link "Products":
        - /url: /en/products
    - listitem:
      - link "Innovation":
        - /url: /en/innovations
    - listitem:
      - link "Sustainability":
        - /url: /en/development
    - listitem:
      - link "Media":
        - /url: /en/media
    - listitem:
      - link "Investors":
        - /url: /en/investors
    - listitem:
      - link "Career":
        - /url: /en/in/your-career
- navigation "Breadcrumb":
  - heading "Breadcrumb" [level=2]
  - list:
    - listitem:
      - link "Home":
        - /url: https://www.bayer.in/en/
    - listitem:
      - link "This is bayer":
        - /url: https://www.bayer.in/en/thisisbayer
    - listitem:
      - link "Bayer in India":
        - /url: https://www.bayer.in/en/thisisbayer/company-profile
    - listitem: 125 years in India
- main:
  - article:
    - heading "125 Years of Bayer in India" [level=1]
    - article:
      - 'img "Collage: a woman picking tea leaves, a family playing outdoors, and a doctor speaking with an eye chart in the background."'
    - list:
      - listitem:
        - link "Overview":
          - /url: /en/thisisbayer
      - listitem:
        - link "Bayer in India":
          - /url: /en/thisisbayer/company-profile
        - list:
          - listitem:
            - link "125 years in India":
              - /url: /en/thisisbayer/125-years-of-bayer-in-india
      - listitem:
        - link "Crop Science":
          - /url: /en/crop-science
      - listitem:
        - link "Pharmaceuticals":
          - /url: /en/pharmaceuticals
      - listitem:
        - link "Consumer Health":
          - /url: /en/thisisbayer/consumerhealth
      - listitem:
        - link "Country Leadership Team":
          - /url: /en/thisisbayer/country-leadership-team
      - listitem:
        - link "Sites":
          - /url: /en/thisisbayer/sites
      - listitem:
        - link "History":
          - /url: /en/thisisbayer/history
      - listitem:
        - link "Contact us":
          - /url: /en/thisisbayer/contact-us
    - paragraph:
      - strong: "What drives us is creating a better life for everyone. Over the last 125 years, we have made significant contributions towards advancing agriculture and healthcare in India while promoting inclusive and sustainable growth through innovation. Guided by our mission: ‘Health for All, Hunger for None’, we will continue to create a better future for all."
    - article:
      - iframe
    - paragraph:
      - strong: What makes us smile?
    - paragraph: When we see a young woman agri-entrepreneur from Jharkhand (Ranchi), guiding more than a thousand smallholder farmers to better yields and prosperity,
    - paragraph:
      - strong: We smile.
    - paragraph: When we see mothers, wives, daughters, and woman of all ages, equipped to make informed choices about their health,
    - paragraph:
      - strong: We smile.
    - paragraph: When we see families across the country prioritizing self-care,
    - paragraph: and each individual being able to pursue their dreams, and welfare,
    - paragraph:
      - strong: We smile.
    - paragraph: When we see partners joining hands and coming together,
    - paragraph: to make a sustainable impact for the future,
    - paragraph:
      - strong: We smile.
    - paragraph: When we look back on the last 125 years of Bayer in India,
    - paragraph: and the difference we have made to lives here,
    - paragraph:
      - strong: We smile.
    - article:
      - img "Vintage advertisement featuring a sailing ship, peacocks, roses, and the text \"German Make Magenta Large Crystals."
    - text: Old label once used on a dyestuff package destined for India.
    - paragraph: We started our journey back in 1896.Through the years, we evolved and focused our efforts in addressing some of the major trends making significant contributions to a variety of industries from agricultural and public health products to pharmaceuticals, rubber technology, diagnostics, dyestuffs, thermoplastic polyurethanes, photographic chemicals and paper. We innovated and adapted products specifically for India. We celebrated partnerships that have lasted more than 50 years.
    - heading "Did you know?" [level=3]
    - paragraph: We have 13000+ employees and associates of Bayer across India
    - paragraph: Today, we have established ourselves as a Life Science company. We have become a trusted brand that millions of Indians can rely on – especially in the fields of agriculture, health and sustainability. We have aligned our focus to national priorities like doubling farmers’ income, creating access to innovative health solutions, prioritizing self-care, manufacturing in India for domestic & global markets, advancing digital solutions, enhancing rural prosperity and empowering people & communities.
    - paragraph
    - paragraph: Now we look forward to the future - Where we can help provide food and nutrition for all while respecting natures resources. Where we can bring innovative disease treatments or transform everyday health for billions of Indians. Where we can achieve the ambitious sustainable development targets we set ourselves.
    - paragraph
    - paragraph: As a global multinational company with a proud local heritage in India, we will continue to collaborate, develop our science, bring sustainable solutions to new fields, engage with society, and create a better future.
    - text: Bayer India Links
    - link " History of Bayer in India":
      - /url: https://www.bayer.in/en/thisisbayer/history
    - link " Corporate Profile":
      - /url: https://www.bayer.in/en/thisisbayer/company-profile
    - link " Archives:100 years of Bayer in India":
      - /url: https://www.bayer.in/sites/bayer_in/files/1996_Bayer_India_Centennial%20Book_India_0.pdf
    - link " 125 years of Bayer in India":
      - /url: https://www.youtube.com/watch?v=PL6TLB8Hidc
    - text: Global Links
    - link " Bayer Global History":
      - /url: https://www.bayer.com/en/history
    - link " 150 Years of Bayer worldwide":
      - /url: https://www.bayer.com/en/file/13786/download?token=NruPtFQU
    - 'link " Milestones (The Bayer story: 1863-1988)"':
      - /url: https://www.bayer.com/en/file/13791/download?token=spg0nL2b
    - text: Discover more
    - listbox "carousel-listbox":
      - link "Conserving Water Rural Development Building awareness amongst the farming community in conserving water in agriculture":
        - /url: /en/development/conserving-water
        - article:
          - img "hands reaching for water"
        - text: Conserving Water
        - heading "Rural Development" [level=4]
        - paragraph: Building awareness amongst the farming community in conserving water in agriculture
      - link "Discovering Hands Preventive Healthcare Radiation-free breast examination for early cancer detection":
        - /url: /en/development/discovering-hands
        - article:
          - img "A person receives a medical examination on their back, with a healthcare professional inspecting their shoulder area."
        - text: Discovering Hands
        - heading "Preventive Healthcare" [level=4]
        - paragraph: Radiation-free breast examination for early cancer detection
      - link "Atal Tinkering Labs Education & Community Engagement Promoting Science Education by adoption of Atal Tinkering Labs":
        - /url: /en/development/atal-tinkering-labs
        - article:
          - img "A girl making her science project"
        - text: Atal Tinkering Labs
        - heading "Education & Community Engagement" [level=4]
        - paragraph: Promoting Science Education by adoption of Atal Tinkering Labs
      - button "previous button"
      - button "next button"
- contentinfo:
  - text: "Last Updated:"
  - time: Thursday, February 22, 2024
  - navigation "This is Bayer  Bayer in India  Crop Science  Pharmaceuticals  Consumer Health  Sites  History Media  News  Media Contacts  Media Coverage Investors  Corporate Governance  Reports  Investor Related Information  MIL BCSL Amalgamation  Monsanto India Ltd. archives":
    - list:
      - listitem:
        - link "This is Bayer":
          - /url: /en/thisisbayer
        - list:
          - listitem:
            - text: 
            - link "Bayer in India":
              - /url: /en/thisisbayer/company-profile
          - listitem:
            - text: 
            - link "Crop Science":
              - /url: /en/crop-science
          - listitem:
            - text: 
            - link "Pharmaceuticals":
              - /url: /en/pharmaceuticals
          - listitem:
            - text: 
            - link "Consumer Health":
              - /url: /en/thisisbayer/consumerhealth
          - listitem:
            - text: 
            - link "Sites":
              - /url: /en/thisisbayer/sites
          - listitem:
            - text: 
            - link "History":
              - /url: /en/thisisbayer/history
      - listitem:
        - link "Media":
          - /url: /en/media
        - list:
          - listitem:
            - text: 
            - link "News":
              - /url: /en/media/news
          - listitem:
            - text: 
            - link "Media Contacts":
              - /url: /en/media/media-contact
          - listitem:
            - text: 
            - link "Media Coverage":
              - /url: /en/bayer-in-media
      - listitem:
        - link "Investors":
          - /url: /en/investors
        - list:
          - listitem:
            - text: 
            - link "Corporate Governance":
              - /url: /en/investors/corporate-governance
          - listitem:
            - text: 
            - link "Reports":
              - /url: /en/investors/annual-reports
          - listitem:
            - text: 
            - link "Investor Related Information":
              - /url: /en/investors/investor-related-information
          - listitem:
            - text: 
            - link "MIL BCSL Amalgamation":
              - /url: /en/investors/mil-bcsl-amalgamation
          - listitem:
            - text: 
            - link "Monsanto India Ltd. archives":
              - /url: /en/investors/monsanto/annual-report
  - text: Get in Touch Do you have any queries or comments about our website, our products or any of our services?
  - link "Contact Us ":
    - /url: /en/thisisbayer/contact-us
  - text: Follow Us
  - link "Facebook":
    - /url: http://www.facebook.com/BayerIndia
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
    - /url: https://www.instagram.com/bayer.india
    - text: 
  - link "RSS Feed":
    - /url: http://www.bayer.com/en/rss.aspx
    - text: 
  - paragraph: Copyright © Bayer CropScience Limited
  - navigation "General Conditions of Use | Privacy Statement | Cookie Settings | Imprint":
    - list:
      - listitem:
        - link "General Conditions of Use":
          - /url: /en/terms-and-conditions
        - text: "|"
      - listitem:
        - link "Privacy Statement":
          - /url: /en/confidentiality
        - text: "|"
      - listitem:
        - link "Cookie Settings":
          - /url: ""
        - text: "|"
      - listitem:
        - link "Imprint":
          - /url: /en/imprint
  - link "Sitemap":
    - /url: /en/sitemap
- status
```

# Test source

```ts
   1 | import { Page, expect } from '@playwright/test';
   2 |
   3 | export async function acceptCookies(page: Page) {
   4 |   await page.getByRole('button', { name: 'Accept Cookies ' }).click();
   5 | }
   6 |
   7 | export async function clickShowMore(page: Page) {
   8 |   await page.getByRole('link', { name: 'Show More' }).click();
   9 | }
  10 |
  11 | export async function goToYearsInIndia(page: Page) {
  12 |   await page.getByRole('link', { name: 'This is Bayer' }).click();
  13 |   await page.getByRole('link', { name: 'years in India' }).click();
  14 |   await expect(page.locator('h1')).toContainText('125 Years of Bayer in India');
  15 | }
  16 |
  17 | export async function goToProductOverview(page: Page) {
> 18 |   await page.getByRole('link', { name: 'Products' }).click();
     |                                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 |   await page.locator('#block-header-section').getByRole('link', { name: 'Overview' }).click();
  20 |   await expect(page.locator('h1')).toContainText('Product areas');
  21 | }
  22 |
  23 | export async function goToAgriculturePartner(page: Page) {
  24 |   await page.getByRole('link', { name: 'Agriculture A partner for' }).click();
  25 | }
  26 |
  27 | export async function goToHomeLogo(page: Page) {
  28 |   await page.getByRole('link', { name: 'Bayer_logo_static' }).click();
  29 | }
  30 |
  31 | export async function clickHomeInitiativesImage(page: Page) {
  32 |   await page.getByRole('img', { name: 'home-breakthrough-initiatives' }).click();
  33 | }
  34 |
```