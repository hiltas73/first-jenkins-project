import { test } from '@playwright/test';
// create a test group with three tests in it with empty test body
// and create a beforeEach and afterEach methods for each test

test.describe('Test Group', () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com/")
    });


    // create a test for checking the radio buttons and checkboxes if they are NOT checked in the page
    test('@checkbox Check() checks the radio buttons and checkboxes if they havnt been checked yet', async ({ page }) => {

        let checkboxesLink = page.locator("text='Checkboxes'");
        await checkboxesLink.click();

        let checkBox1 = page.locator("#box1");

        await checkBox1.check();

    });

    // create a test for unchecking the radio buttons and checkboxes if they are checked in the page
    test('@checkbox unchecked() unchecks the radio buttons and checkboxes if they havnt been unchecked yet', async ({ page }) => {
        let checkboxesLink = page.locator("text='Checkboxes'");
        await checkboxesLink.click();

        let checkBox2 = page.locator("#box2");

        await checkBox2.uncheck();
    });

    // after going to https://practice.cydeo.com/ page, click on dropdowns
    test('@dropdown selectOption() used for dropdowns', async ({ page }) => {
        let dropdownsLink = page.locator("text='Dropdown'");
        await dropdownsLink.click();

        let simpleDropDown = page.locator("//select[@id='dropdown']");
        await simpleDropDown.selectOption("Option 1");

        // 1-select by value
        // await simpleDropDown.selectOption("1");

        // 2-select by visible text
        // await simpleDropDown.selectOption( { label: "Option 1" } );

        // 3-select by index
        // await simpleDropDown.selectOption({ index: 1 });

    });

    test('innerText() retrives the visible text', async ({ page }) => {

        let headerElement = page.locator("//span[@class='h1y']");

        let actualText = await headerElement.innerText();

        console.log(actualText);

    });

    test('inputValue(): only works with <input>, <textarea>, <select>', async ({ page }) => {

        let inputsLink = page.getByText("Inputs");

        //  await inputsLink.scrollIntoViewIfNeeded();
        //  await page.waitForTimeout(3000);

        await inputsLink.click();

        let inputBox = page.locator("//input[@type='number']");

        await page.waitForTimeout(1000);


        await inputBox.fill("123");

        await page.waitForTimeout(1000);

        let inputValue = await inputBox.inputValue();

        console.log(inputValue);

        
    });
   
});