
const{test,chromium } = require('@playwright/test');

test('has title ', async()=>{

const browser = await chromium.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();
const url = ('https://x.com/?lang=en')
await page.goto(url)

//await expect(page) 

await page.getByText('Create account' ).click

const usernameField = page.locator("//input[@type='text']"); 
 await usernameField.fill('Mani'); 

await page.locator('First and last name','Manikandan');

await page.fill('Mobile number','8940352445');

await page.fill('At least 6 characters','123456789');

await page.getByLabel('auth-continue-announce').click



});



