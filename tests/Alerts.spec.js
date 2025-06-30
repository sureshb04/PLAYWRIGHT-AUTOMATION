import {test, expect} from '@playwright/test'
import { request } from 'http'
import { type } from 'os'
const {chromium}  = require('@playwright/test')

test ('Alerts With OK', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //dialog window handler
    //enableing alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type ()).toContain('alert')
    await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })
    await page.click('//*[@id="alertBtn"]')
    await page.waitForTimeout(5000)

})



test.skip ('Confirmation Dialog-Alerts With OK', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //dialog window handler
    //enableing alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type ()).toContain('confirm')
    await expect(dialog.message()).toContain('Press a button!');
        // await dialog.accept();//close by using ok button
        await dialog.dismiss(); // close by using cancel button

    })
    await page.click('//*[@id="confirmBtn"]')
    await page.waitForTimeout(5000)

})


test ('Dialog', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //dialog window handler
    //enableing alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type ()).toContain('prompt')
    await expect(dialog.message()).toContain('Please enter your name:');
       expect(dialog.defaultValue()).toContain('Harry Potter')
       await dialog.accept('John');


    })
    await page.click('//*[@id="promptBtn"]')
    await page.waitForTimeout(5000)

})