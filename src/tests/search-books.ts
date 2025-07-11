import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/search-books";

export async function searchbooks(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.book);
  await page.fill(selectors.search,'git');
}