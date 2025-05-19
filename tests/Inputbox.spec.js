import {test , expect} from '@playwright/test'
test ('Handle inputbox', async({page})=>{
    //open url
    await page.goto('https://iteraprocess.com/en/#modal_contactanos');
    await page.waitForTimeout(5000)
    await page.locator('/html/body/div[3]/div/div/div/div[2]/button[3]').click();
    await expect (await page.locator("//*[@id='wpforms-14887-field_1']")).toBeEmpty();
    await expect (await page.locator("//*[@id='wpforms-14887-field_1']")).toBeEditable();
    await expect (await page.locator("//*[@id='wpforms-14887-field_1']")).toBeEnabled();
    await page.locator("//*[@id='wpforms-14887-field_1']").fill("Suresh")
    await page.waitForTimeout(5000)

})