import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/draganddrop";
export async function draganddrop(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.locator(selectors.draganddrop).click();

  await page.getByText("Simple").click();

  const source = page.locator(selectors.drag);
  const target = page.locator(selectors.drop);
  await source.dragTo(target);
}
