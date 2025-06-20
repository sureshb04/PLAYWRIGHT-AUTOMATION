import {test , expect} from '@playwright/test'
import { type } from 'os';

test ('Auto play script', async({page})=>{
    //open url
    await page.goto('https://demo.nopcommerce.com/register');
    await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Company name:' }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('suresh reddy ');
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).fill('bf');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('rfrf');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Company name:' }).click();
  await page.getByRole('textbox', { name: 'Company name:' }).fill('rrg');
  await page.getByRole('button', { name: 'Register' }).click();


})