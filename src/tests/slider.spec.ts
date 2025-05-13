import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/slider";

export async function slider(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.slider);

  await page.locator(selectors.slide).evaluate((slider: HTMLInputElement, value: string) => {
    slider.value = value;
    slider.dispatchEvent(new Event('input'));
    slider.dispatchEvent(new Event('change'));
  }, '75'); // Set slider value here
}
