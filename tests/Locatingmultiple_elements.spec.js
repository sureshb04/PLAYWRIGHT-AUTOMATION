import {test , expect} from '@playwright/test'

test ('Locators', async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    const tags=await page.$$('a')
    // get all text from links
    for(const tag of tags)
    {
       const tagtext =await tag.textContent();
       console.log(tagtext);
    }

    //get all brands name in text formate
    page.waitForSelector("//div[@id='tbodyid']//h4/a")
   const prods = await page.$$("//div[@id='tbodyid']//h4/a")
   await page.waitForTimeout(2000)

   for(const prod of prods){

    const prodtext = await prod.textContent()
    console.log(prodtext);

   }



})