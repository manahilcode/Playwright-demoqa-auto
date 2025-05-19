import { Page, expect } from "@playwright/test";
import { selectors } from "../lib/selectors/nestedframe";

export async function nestedframe(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.nestedframe);

  const parentFrame = page.frameLocator(selectors.parentframe);
  const childFrame = parentFrame.frameLocator(selectors.childframe); 

  await expect(childFrame.getByText('Child Iframe')).toBeVisible();
  await expect(parentFrame.getByText('Parent frame')).toBeVisible();
}
