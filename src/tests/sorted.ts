import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/sorted";
export async function droppable(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.locator(selectors.sort).click();

  await page.getByText("List").click();

  const order = [
    selectors.sortsix,
    selectors.sortfive,
    selectors.sortfour,
    selectors.sortthree,
    selectors.sorttwo,
    selectors.sortone,
  ];

  for (let i = 0; i < order.length; i++) {
    if (i === 0) continue; // First element stays at top

    const source = page.locator(order[i]);
    const target = page.locator(order[0]);
    await source.dragTo(target);
  }
}
