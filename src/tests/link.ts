import { Page, BrowserContext } from '@playwright/test';
import { selectors } from '../lib/selectors/links';

export async function link(page: Page): Promise<void> {
  const context: BrowserContext = page.context();


  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.Links);


  const [homePage] = await Promise.all([
    context.waitForEvent('page'),
    page.click(selectors.home),
  ]);
  await homePage.waitForLoadState();
  await homePage.close(); 
  await page.bringToFront();

  const [dynamicPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click(selectors.hometrf),
  ]);
  await dynamicPage.waitForLoadState();
  await dynamicPage.close(); 
  await page.bringToFront();

  await page.click(selectors.created);
  await page.waitForSelector('#linkResponse');
  const responseText = await page.textContent('#linkResponse');
  console.log('API Response:', responseText);

 const linkSelectors = [
    selectors.nocontent,
    selectors.moved,
    selectors.badrequest,
    selectors.unauthorized,
    selectors.forbidden,
    selectors.notFound,
  ];

  for (const selector of linkSelectors) {
    await page.click(selector);
    await page.waitForSelector('#linkResponse');
    const text = await page.textContent('#linkResponse');
    console.log(`${selector}: ${text}`);
  }
}
