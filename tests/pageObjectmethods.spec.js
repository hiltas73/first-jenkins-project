import { test } from '@playwright/test';

test("Getting the title of the page", async ({ page }) => {
    // goto https://practice.cydeo.com/
    await page.goto("https://practice.cydeo.com/");

    let actualTitle = await page.title();

    console.log(actualTitle);

    await page.waitForTimeout(1000);
});


test("Getting the current URL of the page", async ({ page }) => {
    // goto https://practice.cydeo.com/
    await page.goto("https://practice.cydeo.com/");

    // get the current URL of the page assign it to the let variable
    let actualURL = page.url();

    // print the current URL
    console.log(actualURL);

});

test("Set the window size", async ({ page }) => {
    // set the window size to width=1500 and height=1080
    await page.setViewportSize({ width: 1500, height: 1080 });

    // goto https://practice.cydeo.com
    await page.goto("https://practice.cydeo.com/");
    await page.waitForTimeout(1000);
    
});