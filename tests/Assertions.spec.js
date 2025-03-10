import {test , expect} from '@playwright/test'
import { type } from 'os';

test ('AssertionsTest', async({page})=>{
    //open url
    await page.goto('https://demo.nopcommerce.com/register');
    //expect (page).toHave()          page has URL

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //expect (page).toHaveTitle()       page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //expect(locator).toBeVisible()     find element and visible or not
   const  logoelement=await page.locator('.header-logo')
   await expect(logoelement).toBeVisible();

   //expect(locator).toBeEnabled()      element is enabled or not
   const en=await page.locator('#small-searchterms')
   await expect(en).toBeEnabled()
   
   //expct(locator).toBeChecked()        finding radiobutton
   const Radio_button = await page.locator('#gender-male')
   await Radio_button.check()   //select Radio Button
   await expect(Radio_button).toBeChecked()

   //Check Box
   const Checkbox = await page.locator('#Newsletter')
   await expect(Checkbox).toBeChecked()

   //expect(locator).ToHaveAttribute
   const submmit_button = await page.locator('#register-button')
   await expect(submmit_button).toHaveAttribute('type','submit')

   //expect(locator).toHaveText()
   //const reghead = await page.locator('.page-title h1')
   //await expect(reghead).toHaveText('Register')
   await expect (await page.locator('.page-title h1')).toHaveText('Register') //fulltext



   //expect(locator).toContainText()
   await expect (await page.locator('.page-title h1')).toContainText('Reg')   //partial text

   //expect(locator).toHaveValue()   input has value or not

   const email = await page.locator('#Email')
   await email.fill('suresh@email')
   await expect(email).toHaveValue('suresh@email')


   //expect(locator).toHaveCount()   lst of elements to find it
   const options = await page.locator('select[id="customerCurrency"] option')
   await expect(options).toHaveCount(2)



})