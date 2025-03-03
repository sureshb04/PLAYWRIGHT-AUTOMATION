//const {test, expect} =require ('@playwright/test') 
import {test , expect} from '@playwright/test'

test ('Locators', async({page})=>{

    await page.goto('https://www.demoblaze.com/');
    //click on login button
    await page.click('//*[@id="login2"]')
    await page.locator('#loginusername').fill('suresh')
    await page.type('#loginpassword','9985244854')
    await page.waitForTimeout(3000)
    //click on login button
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')
    await page.waitForTimeout(3000)
   const close = await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[1]')
   await  expect(close).toBeVisible()
   await page.click('//*[@id="logInModal"]/div/div/div[3]/button[1]')
   await page.waitForTimeout(3000)

   await page.close();




})