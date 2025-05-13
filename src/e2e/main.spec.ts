import { test } from "@playwright/test";
import { fillDemoForm } from "../tests/form.spec";
import { addtable } from "../tests/add.spec";
import { menuNavigation } from "../tests/menuscript.spec";
import { datepicker } from "../tests/datepicker.spec";
import { slider } from "../tests/slider.spec";
import { progressbar } from "../tests/progressbar.spec";
import { clickAllDropdowns } from "../tests/menuselect.spec";
const { BASE_URL } = require("../lib/constants");

test.describe.serial("Full automation flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test("Automate menu navigation", async ({ page }) => {
    await menuNavigation(page);
  });

  test("Automate table entry", async ({ page }) => {
    await addtable(page);
  });

  test("Automate form submission", async ({ page }) => {
    await fillDemoForm(page);
  });
  test("Automate date picker", async ({ page }) => {
    await datepicker(page);
  });
  test("Automate slider", async ({ page }) => {
    await slider(page);
  });
  test("Automate progressbar", async ({ page }) => {
    await progressbar(page);
  });
  test("clickAllDropdowns", async ({ page }) => {
    await clickAllDropdowns(page);
  });
});
