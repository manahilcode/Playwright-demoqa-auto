const { test, expect } = require('@playwright/test');

test('Register and Login with same credentials', async ({ page }) => {
  // Replace with your actual URL

await page.goto('https://demoqa.com/register')
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe123',
    password: 'Test@1234'
  };

  // Navigate to registration page
 // await page.goto(`${baseUrl}/register`);

  // Fill the registration form
  await page.fill('//input[@id="firstname"]', user.firstName);
  await page.fill('input[placeholder="Last Name"]', user.lastName);
  await page.fill('input[placeholder="UserName"]', user.username);
  await page.fill('input[placeholder="Password"]', user.password);

  // Check reCAPTCHA checkbox (if it's a dummy or test version)
  // Skipping real reCAPTCHA as it cannot be solved by automation.
  // If you use test keys, you can skip or mock it in test environment.

  // Click Register
  await page.click('text=Register');

  // Wait for redirect or confirmation (adjust based on real response)
  // await page.waitForURL(`${baseUrl}/login`);

  // // Login
  // await page.fill('input[placeholder="UserName"]', user.username);
  // await page.fill('input[placeholder="Password"]', user.password);
  // await page.click('text=Login');

  // // Expect to be logged in
  // await expect(page).toHaveURL(/.*dashboard|home/i); // Adjust regex to match your dashboard/home page
});
