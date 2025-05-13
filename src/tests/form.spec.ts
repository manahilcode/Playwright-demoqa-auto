import { Page , expect} from "@playwright/test";
import { formSelectors } from "../lib/selectors/formSelector";
import path from "path";

export async function fillDemoForm(page: Page): Promise<void> {
  await page.locator(formSelectors.elementsCard).click();
  await page.locator(formSelectors.formsGroup).click();
  await page.locator(formSelectors.practiceForm).click();

  await page.waitForSelector(formSelectors.firstName);
  await page.locator(formSelectors.firstName).fill("Manahil");
  await page.locator(formSelectors.lastName).fill("Adil");
  await page.locator(formSelectors.email).fill("manahiladil137@gmail.com");
  await page.waitForTimeout(500);
  await page.locator(formSelectors.genderRadioLabel).click();
  await page.waitForTimeout(500);
  await page.locator(formSelectors.mobileNumber).fill("9876543210");
  await page.locator(formSelectors.dateOfBirth).fill("06 May 2025");
  await page.waitForTimeout(500);

  await page.locator(formSelectors.subjectsInput).fill("hello");
  await page.waitForTimeout(500);

  await page.locator(formSelectors.sportsCheckboxLabel).click();
  await page.waitForTimeout(500);

  const filePath = path.resolve(__dirname, "../../assets/img/sample.jpg");

  await page.locator(formSelectors.uploadPicture).setInputFiles(filePath);
  await page.waitForTimeout(500);

  await page
    .locator(formSelectors.currentAddress)
    .fill("123 Dummy Street, Faketown");
  await page.waitForTimeout(500);

  await page.locator(formSelectors.selectState).click();
  await page.locator(formSelectors.uttarPradesh).click();
  await page.waitForTimeout(500);

  await page.locator(formSelectors.selectCity).click();
  await page.locator(formSelectors.agraCity).click();
  await page.waitForTimeout(500);
  await page.click(formSelectors.submitt);
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();

}
