import {test, expect} from '@playwright/test'
import { table } from 'console';
import { type } from 'os'
const {chromium}  = require('@playwright/test')

test ('Handle table', async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/')

   const table = await page.locator('#productTable')

//1)Total No: rows/coloums
   const coloums = await table.locator('thead tr th')
   console.log("Total coloums:", await coloums.count())
   expect(await coloums.count()).toBe(4)

   const rows = await table.locator('tbody tr')
   console.log("Total Rows:", await rows.count())
   expect(await rows.count()).toBe(5)

   //2)select check nox perticular product
   const match = await rows.filter({
      has: page.locator('td'),
      hasText: 'Tablet'

   })
    await match.locator('input').check()

   //3)print all the product details
   for(let i=0;i<rows.count();i++)
      {
         const row = rows.nth(i)
         const tds = row.locator('td')
         for(let j=0;j<await tds.count()-1;j++)
         {
            console.log (await tds.nth(j).textContent())

         }

      }

   //4)read data from all pages in the table

      const pages = await page.locator('.pagination li a')
      await pages.count()
      console.log("Total pages:", await pages.count())

      for(let pag=0;pag<await pages.count();pag++)
      {
         if(pag>0){
            await pages.nth(pag).click()
            await page.waitForTimeout(2000)
         }
         const rowCount = await rows.count()
         for(let i=0;i<rowCount;i++)
      {
         const row = rows.nth(i)
         const tds = row.locator('td')
         const tdCount = await tds.count()
         for(let j=0;j<await tdCount - 1;j++)
         {
            console.log(await tds.nth(j).textContent())

         }


      }
       await page.waitForTimeout(5000)
      }

   await page.waitForTimeout(5000)


})
    //5)select multiple products
   await selectProduct(rows, page, 'Tablet')
   await selectProduct(rows, page, 'Laptop')
   await selectProduct(rows, page, 'Smartwatch')

async function selectProduct(rows,page, name){

   const match = await rows.filter({
      has: page.locator('td'),
      hasText: name
   })

   
      await match.locator('input').check()

}


