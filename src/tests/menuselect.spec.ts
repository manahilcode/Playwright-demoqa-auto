import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/menu";

export async function clickAllDropdowns(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).scrollIntoViewIfNeeded();
  await page.locator(selectors.menu).click();
  await page.locator(selectors.Selectmenu).scrollIntoViewIfNeeded({ timeout: 10000 });
  await page.click(selectors.Selectmenu);
  await page
    .locator(selectors.selectvalue)
    .selectOption({ label: "Group 2, option 1" });

  await page.locator(selectors.selectone).selectOption({ label: "Dr." });

  await page
    .locator(selectors.oldstyleselectmenu)
    .selectOption({ label: "Green" });

  await page
    .locator(selectors.multiplemenu)
    .selectOption([{ label: "Green" }, { label: "Blue" }]);
  await page.locator(selectors.standart).selectOption({ label: "Volvo" });
}
