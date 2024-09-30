import { test } from '@playwright/test';

test.describe('@smoke Test Group', () => {

    // create beforeEach for tests
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });

    // create afterEach for tests
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(1000);
    });
});

// create me a test for getting the title of the page
test('@title Getting the title of the page', async ({ page }) => {
        let actualTitle = await page.title();

        console.log(actualTitle);

        await page.waitForTimeout(1000);
    });

// create a test for getting the URL of the page
    test('Getting the URL of the page', async ({ page }) => {
        let actualURL = page.url();

        console.log(actualURL);

        await page.waitForTimeout(1000);
    });

// set the window size to width=1500 height=1080
    test('Setting the window size', async ({ page }) => {
        await page.setViewportSize({ width: 1500, height: 1080 });

        await page.waitForTimeout(1000);
    });


