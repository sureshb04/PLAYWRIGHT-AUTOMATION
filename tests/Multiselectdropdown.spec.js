import {test,expect} from '@playwright/test'
import exp from 'constants'

test ('multiselect dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //select multiple option from multi select dropdown

    await page.selectOption('#colors',['red','blue','White'])

    //Assertions
    //1)No of options in the dropdown
    const Options=await page.locator('#colors option')
    await expect(Options).toHaveCount(5);

    //2)check no of options in dropdown using js array
    const Options1=await page.$$('#colors option')
    console.log("no of options:",Options1.length)
    await expect(Options1.length).toBe(5);

    //3)check the precence of the value in dropdown
    const content=await page.locator('#colors').textContent()
    await expect(content.includes('Red')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()




    await page.waitForTimeout(5000);


    
})