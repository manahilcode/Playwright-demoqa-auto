import { Page } from "@playwright/test";
import { menupageselectors, selector } from "../lib/selectors/menuSelector";

export async function menuNavigation(page: Page) {
  await page.locator(selector.menu).click();

  for (const xpath of Object.values(menupageselectors)) {
    const element = await page.waitForSelector(`xpath=${xpath}`);
    await element.click();
    await page.waitForTimeout(500);
    await element.click();
    await page.waitForTimeout(500);
  }
}
