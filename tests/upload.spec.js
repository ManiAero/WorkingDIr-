const{test,chromium } = require('@playwright/test');

test('has title ', async()=>{

const browser = await chromium.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();
const url = ('https://testautomationpractice.blogspot.com/')
await page.goto(url);


// UPLOAD
const btn = await page.locator('input[id="singleFileInput"]');

await btn.click();
await btn.setInputFiles('C:\\Users\\Admin\\Downloads\\WhatsApp Image 2024-12-30 at 9.28.43 AM.jpeg');

await page.waitForTimeout(3000);

await page.locator('button[type="submit"]').first();

});