import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/modeldilouges";

export async function modeldilouges(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.ModalDialogs);
  await page.click(selectors.largemodule);
  await page.click(selectors.closelarge);
  await page.click(selectors.smallmodule);

  await page.click(selectors.closesmall);
}
