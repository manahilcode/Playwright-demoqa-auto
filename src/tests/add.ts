import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/addSelector";

export async function addtable(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.webTablesMenu);
  await page.click(selectors.addNewRecordButton);
  await page.waitForTimeout(500);

  await page.locator(selectors.firstNameInput).fill("Manahil");
  await page.locator(selectors.lastNameInput).fill("Adil");
  await page.locator(selectors.emailInput).fill("manahil@example.com");
  await page.waitForTimeout(500);
  await page.locator(selectors.ageInput).fill("30");
  await page.locator(selectors.salaryInput).fill("50000");
  await page.locator(selectors.departmentInput).fill("Engineering");
  await page.click(selectors.submitButton);
  await page.waitForTimeout(500);

  // await page.locator(selectors.editButtonForJohn).click();
  // await page.locator(selectors.salaryInput).fill("60000");
  // await page.click(selectors.submitButton);
  // await page.waitForTimeout(1000);

  await page.locator(selectors.delete).click();
  await page.waitForTimeout(3000);
}
