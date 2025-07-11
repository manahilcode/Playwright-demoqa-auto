import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/browse";


import path from "path";

export async function browse(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.browse);
const filePath = path.resolve(__dirname, "../../assets/pics.png");


  
  await page.locator(selectors.upload).setInputFiles(filePath);
  await page.locator(selectors.download).click;
}