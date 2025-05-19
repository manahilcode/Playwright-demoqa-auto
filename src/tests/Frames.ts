import { Page ,expect } from "@playwright/test";
import { selectors } from "../lib/selectors/frames";

export async function Frames(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.Frames);
  await page.click(selectors.frame1);
  const frame1 = page.frameLocator(selectors.frame1);
  await expect(frame1.getByText("This is a sample page")).toBeVisible();


  await page.click(selectors.frame2);
  const frame2 = page.frameLocator(selectors.frame2);
  await expect(frame2.getByText("This is a sample page")).toBeVisible();
  


}