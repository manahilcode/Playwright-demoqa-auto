import { Page } from "@playwright/test";
import { dateOfBirthInput } from "../lib/selectors/datepicker";

export async function datepicker(page: Page): Promise<void> {
  await page.locator(dateOfBirthInput.elementsCard).click();
  await page.locator(dateOfBirthInput.menu).scrollIntoViewIfNeeded();
  await page.locator(dateOfBirthInput.menu).click();
  await page.locator(dateOfBirthInput.datepicker).click();
  await page.locator(dateOfBirthInput.inputfeild).click();

  await page
    .locator(dateOfBirthInput.selectMonthDropdown)
    .selectOption({ label: "October" });
  await page
    .locator(dateOfBirthInput.selectYearDropdown)
    .selectOption({ label: "2001" });

  await page.click(dateOfBirthInput.selectdate);
}
