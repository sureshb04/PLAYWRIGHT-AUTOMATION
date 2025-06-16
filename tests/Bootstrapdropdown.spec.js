import { test,expect } from "@playwright/test";
const { chromium } = require('playwright');

test('Bootstrap dropdown',async({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    await page.waitForTimeout(8000);
    await page.locator('.css-47sehv').click();
    await page.locator('.multiselect').click()

    // //1)
     const count=await page.locator('ul>li label input')
     await expect(count).toHaveCount(11);
    // // 2
    const count1=await page.$$('ul>li label input')
    console.log("no of options:",count1.length)
    await expect(count1.length).toBe(5);

    // 3
    const labels = await page.$$('ul > li > label');

    for (const label of labels) {
    const text = await label.innerText();
    console.log("Label text is:", text);
    }

    const selects = await page.$$('ul > li > label');

    for(let option3 of selects)
    {
        const texts = await option3.innerText();
        if(texts.includes('Java')   ||   texts.includes('CSS'))
        {
            await option3.click();
        }
    }
     await page.waitForTimeout(5000);

})