import {test, expect} from '@playwright/test'
import { type } from 'os'
const {chromium}  = require('@playwright/test')

test ('Frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frames
   const allframes = await page.frames()
   console.log("Total frames:", allframes.length);

   //approch 1:using name or url
   const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
   await frame1.locator('name="mytext1"','Suresh')
   await page.waitForTimeout(3000)

   //approch 2:using frame locator
   
   const inputbox=await page.frameLocator("frame[src='frame_2.html']").locator('name="mytext2"')
   await page.waitForTimeout(3000)
   await inputbox.fill("Reddy")

   await page.waitForTimeout(5000)




});