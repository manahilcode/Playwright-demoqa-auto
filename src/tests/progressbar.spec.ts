import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/progressbar";

export async function progressbar(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).scrollIntoViewIfNeeded();
  await page.locator(selectors.menu).click();
  await page.click(selectors.progress);
  await page.click(selectors.button);

  for (let i = 0; i < 100; i++) {
    const progressValueText = await page
      .locator(selectors.progressbar)
      .innerText();
    const percentage = parseInt(progressValueText.replace("%", "").trim());

    if (percentage >= 67) {
      await page.click(selectors.button);
    }

    await page.waitForTimeout(100);
  }
}
