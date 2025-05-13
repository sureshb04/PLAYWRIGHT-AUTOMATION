import { test, expect } from '@playwright/test';
import exp from 'constants';

test('SoftAssertions', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html")

    //Hard Assertions
    //hard assertions are will terminate the execution whenever it got failed.
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page.locator('//*[@id="nava"]')).toBeVisible();

    //Soft Assertions
    //soft assertions are will not terminate the excetion whenevergot failed also.just adding .soft after expect.
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect.soft(page.locator('//*[@id="nava"]')).toBeVisible();






});