const {test, expect } = require('@playwright/test');


test('Home page',async ({page})=>{

   await page.goto('https://www.demoblaze.com/');

   const pageTitle = page.title();
   console.log('page title is :', pageTitle);

   await expect(page).toHaveTitle('STORE');
   const pageURL = page.url();

   console.log('page URL:', pageURL)
   await expect(page).toHaveURL('https://www.demoblaze.com/');

   await page.close();

})