import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/add-selector";
import { faker } from "@faker-js/faker";

export async function addtable(page: Page): Promise<void> {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const age = faker.number.int({ min: 20, max: 60 }).toString();
  const salary = faker.number.int({ min: 30000, max: 150000 }).toString();
  const department = faker.commerce.department();

  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.webTablesMenu);
  await page.click(selectors.addNewRecordButton);
  await page.waitForTimeout(500);

  await page.locator(selectors.firstNameInput).fill(firstName);
  await page.locator(selectors.lastNameInput).fill(lastName);
  await page.locator(selectors.emailInput).fill(email);
  await page.waitForTimeout(500);
  await page.locator(selectors.ageInput).fill(age);
  await page.locator(selectors.salaryInput).fill(salary);
  await page.locator(selectors.departmentInput).fill(department);
  await page.click(selectors.submitButton);
  await page.waitForTimeout(500);

  await page.locator(selectors.delete).click();
  await page.waitForTimeout(3000);
}
