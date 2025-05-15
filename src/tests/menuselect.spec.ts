import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/menu";

export async function clickAllDropdowns(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).scrollIntoViewIfNeeded({ timeout: 10000 });
  await page.locator(selectors.menu).click();

  await page
    .locator(selectors.Selectmenu)
    .waitFor({ state: "visible", timeout: 10000 });
  await page
    .locator(selectors.Selectmenu)
    .scrollIntoViewIfNeeded({ timeout: 10000 });
  await page.click(selectors.Selectmenu);

  await page.locator(selectors.selectvalue).click();
  await page
    .locator(
      '//div[contains(@id, "react-select") and text()="Group 2, option 1"]'
    )
    .click();

  await page.locator(selectors.selectone).click();
  await page
    .locator('//div[contains(@id, "react-select") and text()="Dr."]')
    .click();

  await page
    .locator(selectors.oldstyleselectmenu)
    .selectOption({ label: "Green" });

  await page.locator(selectors.multiplemenu).click();
  await page.locator(selectors.selectblue).click();
  await page.click(selectors.multiplemenu);
  await page.click(selectors.multiplemenu);
  await page.locator(selectors.selectgreen).click({ timeout: 50000 });
  await page.click(selectors.multiplemenu);
  await page.locator(selectors.standart).selectOption({ label: "Volvo" });
}
