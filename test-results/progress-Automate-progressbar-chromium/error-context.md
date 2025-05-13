# Test info

- Name: Automate progressbar
- Location: C:\Users\TECHNIFI\Desktop\demoga-auto\src\e2e\progress.spec.ts:6:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/", waiting until "load"

    at C:\Users\TECHNIFI\Desktop\demoga-auto\src\e2e\progress.spec.ts:7:12
```

# Page snapshot

```yaml
- img "adplus-dvertising"
- iframe
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- link "Selenium Online Training":
  - /url: https://www.toolsqa.com/selenium-training/
  - img "Selenium Online Training"
- img
- heading "Elements" [level=5]
- img
- heading "Forms" [level=5]
- img
- heading "Alerts, Frame & Windows" [level=5]
- img
- heading "Widgets" [level=5]
- img
- heading "Interactions" [level=5]
- img
- heading "Book Store Application" [level=5]
- contentinfo: © 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
   1 | // progressbar.test.ts
   2 | import { test } from '@playwright/test';
   3 | import { progressbar } from '../tests/progressbar.spec'; 
   4 | const { BASE_URL } = require("../lib/constants");// Adjust the path
   5 |
   6 | test('Automate progressbar', async ({ page }) => {
>  7 | await page.goto(BASE_URL);
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
   8 |   await progressbar(page); // ✅ Correct function call
   9 | });
  10 |
```