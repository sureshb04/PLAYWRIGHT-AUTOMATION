import {test , expect} from '@playwright/test'



test ('Locators', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //For alt in images we can find it
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()
    //for place holder we can see in any username/password
    await page.waitForTimeout(2000)
    await page.getByPlaceholder('Username').fill("Admin")
    await page.waitForTimeout(2000)
    await page.getByPlaceholder('Password').fill("admin123")
    await page.waitForTimeout(2000)
    //getting role any button or something overining to use this 
    await page.getByRole('button', {type: 'submit'}).click();
    await page.waitForTimeout(2000)
    // to get text from the attributes  locate by text content
    // await expect(await page.getByText('McQueen Nguyen51')).toBeVisible();

    const name=await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p').textContent()
    await expect(await page.getByText(name)).toBeVisible();





})