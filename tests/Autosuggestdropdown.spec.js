import {test, expect} from '@playwright/test'
import { type } from 'os'
const {chromium}  = require('@playwright/test')

test ('Auto suggest drop down', async({page})=>{

    await page.goto('https://www.redbus.in/')
    await page.locator("//div[@class='labelCityWrapper___fd5744']/div[text()='From']").click()
    await page.waitForTimeout(3000)
    await page.locator('//div[@class="labelCityWrapper___fd5744"]').fill('Bangalore')
    await page.waitForSelector("//div[@class='srcDest___aa6db3']")


    const cities=await page.$$("//div[@class='srcDest___aa6db3']")
    for(let option of cities)
    {
        const values=await option.textContent()
        // console.log(values)
        if(values.includes('Banglore'))
        {
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(5000)

})