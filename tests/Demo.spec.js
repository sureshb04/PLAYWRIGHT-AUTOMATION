import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.online-image-editor.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: 'Examples' }).click();
  await page.goto('https://www.online-image-editor.com/');
  await page.getByRole('link', { name: 'Gifmaker' }).click();
  await page.getByRole('link', { name: 'Back to Image Editor', exact: true }).click();
  await page.locator('iframe[name="aswift_3"]').contentFrame().locator('iframe[name="ad_iframe"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await page.locator('#header div').filter({ hasText: 'English Nederlands Spanish' }).click();
  await page.locator('#languageId').selectOption('nederlands');
  await page.goto('https://www.online-image-editor.com/?language=nederlands');
  await page.locator('#languageId').selectOption('english');
  await page.goto('https://www.online-image-editor.com/?language=english');
});