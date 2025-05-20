import { Page, expect } from "@playwright/test";
import { selectors } from "../lib/selectors/browsewindows";

export async function BrowserWindow(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();

  await page.locator(selectors.menu).click();

  await page.click(selectors.BrowserWindow);

  const [newTab] = await Promise.all([
    page.context().waitForEvent("page"),
    page.click(selectors.tab),
  ]);
  await newTab.waitForLoadState();
  const tabText = await newTab.locator("h1").textContent();
  console.log("New Tab Text:", tabText);
  await newTab.close();

  const [newWindow] = await Promise.all([
    page.context().waitForEvent("page"),
    page.click(selectors.newwindow),
  ]);
  await newWindow.waitForLoadState();
  const windowText = await newWindow.locator("h1").textContent();
  console.log("New Window Text:", windowText);
  await newWindow.close();

  const [msgWindow] = await Promise.all([
    page.context().waitForEvent("page"),
    page.click(selectors.newwindowmsg),
  ]);
  await msgWindow.waitForLoadState();
  const messageText = await msgWindow.evaluate(() =>
    document.body.textContent?.trim()
  );
  console.log("New Window Message Text:", messageText);
  await msgWindow.close();
}
