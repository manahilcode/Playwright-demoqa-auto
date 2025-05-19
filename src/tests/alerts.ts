import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/alert";

export async function alert(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.alert);
  await page.click(selectors.clickme1);
    page.once('dialog', async dialog => {
    console.log('Simple Alert:', dialog.message());
    await dialog.accept();
  });
  await page.click('#alertButton')
  await page.waitForTimeout(500);

  await page.click(selectors.clickme2);
  page.once('dialog', async dialog => {
    console.log('Delayed Alert:', dialog.message());
    await dialog.accept();
  });
  await page.click('#timerAlertButton');
   await page.waitForTimeout(500);
   await page.click(selectors.clickme3);
     page.once('dialog', async dialog => {
    console.log('Confirm Alert:', dialog.message());
    await dialog.accept(); // or dialog.dismiss()
  });
  await page.click('#confirmButton');
   await page.waitForTimeout(500);
    await page.click(selectors.clickme4);
    page.once('dialog', async dialog => {
    console.log('Prompt Alert:', dialog.message());
    await dialog.accept('Manahil'); // Input text into prompt
  });
  await page.click('#promtButton');
}
