const {test, expect} = require("@playwright/test");
const { timeout } = require("../playwright.config");
// to run the test, use the command: npx playwright test

test('First playwright test',async ({browser, page})=> //toReplaceFunction
{
// no need to use browser.newContext() and browser.newPage() as the test function already provides a page object
    // const context = await browser.newContext(); // Create a new browser context
    // const page = await context.newPage(); // Create a new page in the context
    await page.goto("https://www.google.com"); // Navigate to the URL
    await page.screenshot({path: "screenshot.png"});// Take a screenshot and save it as "screenshot.png"
    // await browser.close(); // Close the browser
});

test("Second playwright test",async ({page})=> //toReplaceFunction
{
    const searchBox = page.locator("textarea#APjFqb");
    await page.goto("https://www.google.com"); 
    await page.screenshot({path: "screenshot.png"});// Take a screenshot and save it as "screenshot.png"
    await page.title();
    await expect(page).toHaveTitle("Google"); // Assert that the title is "Google"
    await searchBox.fill("Playwright"); // Fill the search box with "Playwright"
    await page.getByRole('button', { name: 'بحث Google' }).click();
    await page.waitForTimeout(3000);
    // await expect(page.locator()).toContainText("Omar");
    // await page.waitForLoadState("networkidle");
    // await page.locator("asda").nth(0).waitFor();
    // await page.locator("asda").allTextContents();

});

test('@Web Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    const email = "anshika@gmail.com";
    const productName = 'zara coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
  
 })
// to debug use npx playwright test --debug
// to debug use npx playwright test codegen + url

