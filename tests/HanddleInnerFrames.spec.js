import {test, expect} from '@playwright/test'
import { type } from 'os'
const {chromium}  = require('@playwright/test')

test ('Frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    frame3.locator('#id3 > div > input[type=text]').fill('welcome')

    //nested frames
    const childframes =await frame3.childFrames()
    await childframes[0].locator('#i6 > div.vd3tt > div').check()

    await page.waitForTimeout(3000)





});