import { test } from "@playwright/test";
import { fillDemoForm } from "../tests/form";
import { addtable } from "../tests/add";
import { menuNavigation } from "../tests/menu-script";
import { datepicker } from "../tests/date-picker";
import { slider } from "../tests/slider";
import { progressbar } from "../tests/progress-bar";
import { clickAllDropdowns } from "../tests/menu-select";
import { droppable } from "../tests/sorted";
import { draganddrop } from "../tests/drag-and-drop";
import { axisrestricted }from "../tests/axis-rescrited";
import { login } from "../tests/login";
import { alert } from "../tests/alerts";
import { Frames } from "../tests/frames";
import {nestedframe} from "../tests/nested-frame";
import {searchbooks} from "../tests/search-books";
import {modeldilouges} from "../tests/model-diloges";
import {link} from "../tests/link";
import {browse} from "../tests/browse";
import {BrowserWindow} from "../tests/browser-window";
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

  test.skip("Automate form submission", async ({ page }) => {
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
   test("sorted", async ({ page }) => {
    await droppable(page);
  });
   test("drag and drop", async ({ page }) => {
    await draganddrop(page);
  });
  test("axisrestricted", async ({ page }) => {
    await axisrestricted(page);
  });
  test("login", async ({ page }) => {
    await login(page);
  });
   test("search books", async ({ page }) => {
    await searchbooks(page);
  });
  test("alert", async ({ page }) => {
    await alert(page);
  });
  test("Frames", async ({ page }) => {
    await Frames(page);
  });
  test("NestedFrames", async ({ page }) => {
    await nestedframe(page);
  });
  test("modeldilouges", async ({ page }) => {
    await modeldilouges(page);
  });
  test("link", async ({ page }) => {
    await link(page);
  });
  test("browse", async ({ page }) => {
    await browse(page);
  });
   test("BrowserWindow", async ({ page }) => {
    await BrowserWindow(page);
  });
});

