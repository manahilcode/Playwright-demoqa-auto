import { Page } from "@playwright/test";
import { selector } from "../lib/selectors/axisrestricted";

export async function axisrestricted(page: Page): Promise<void> {
  await page.locator(selector.elementsCard).click();
  await page.locator(selector.menu).click();
  await page.click(selector.dragable);

  await page.getByText("Axis Restricted").click();

  const xElement = await page.locator(selector.xaxis);
  const xBox = await xElement.boundingBox();
  if (!xBox) throw new Error("X-axis element not found");

  await page.mouse.move(xBox.x + xBox.width / 2, xBox.y + xBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(
    xBox.x + xBox.width / 2 + 100,
    xBox.y + xBox.height / 2,
    { steps: 10 }
  );
  await page.mouse.up();

  const yElement = await page.locator(selector.yaxis);
  const yBox = await yElement.boundingBox();
  if (!yBox) throw new Error("Y-axis element not found");

  await page.mouse.move(yBox.x + yBox.width / 2, yBox.y + yBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(
    yBox.x + yBox.width / 2,
    yBox.y + yBox.height / 2 + 100,
    { steps: 10 }
  );
  await page.mouse.up();
}
