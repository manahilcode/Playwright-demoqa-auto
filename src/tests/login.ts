import { Page } from "@playwright/test";
import { selectors } from "../lib/selectors/loginselector";

export async function login(page: Page): Promise<void> {
  await page.locator(selectors.elementsCard).click();
  await page.locator(selectors.menu).click();
  await page.click(selectors.book);
  await page.click(selectors.regbutton);

  const user = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe123",
    password: "Test@1234",
  };

  await page.fill(selectors.firstname, user.firstName);
  await page.fill(selectors.lastname, user.lastName);
  await page.fill(selectors.username, user.username);
  await page.fill(selectors.password, user.password);
  await page.click("text=Register");

  await page.click(selectors.gotologin),
  await page.fill(selectors.username, user.username);
  await page.fill(selectors.password, user.password);
  await page.click("text=Login");
}
