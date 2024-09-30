import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {
    await page.goto("https://www.youtube.com");

    await page.waitForTimeout(1000);

    let searchBox = page.locator("//input[@id='search']");

    await searchBox.click();

    await searchBox.fill('Cydeo');

    await page.waitForTimeout(1000);

    await searchBox.press("Enter");

    await page.waitForTimeout(2000);

    let firstResult = page.locator("(//a[@id='video-title'])[1]");

    await firstResult.click();

    await page.waitForTimeout(2000);

});