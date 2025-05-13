import {test ,expect} from '@playwright/test' ;
import { timeStamp } from 'console';

test('playwright learn',async({page}) =>{
await page.goto('https://www.jio.com/selfcare/login/')
await expect(page).toHaveTitle('Login | Jio')
const jio_options = await page.locator('.cursor-pointer')
const count = await jio_options.count()

for (let i=0; i<count; i++){
    await jio_options.nth(i).click()
    await page.waitForTimeout(1000);
}

});