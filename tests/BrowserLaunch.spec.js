
const{test,chromium } = require('@playwright/test');

test('has title ', async()=>{

const browser = await chromium.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();
const url = ('https://x.com/?lang=en')
await page.goto(url)

//await expect(page) 

//await page.getByText('Create account' ).click

const btn = await page.getByText('Create account');
await btn.click();

await page.fill("input[autocomplete='name']",'Manikandan')

await page.fill("input[autocomplete='email']", 'maniaer0577@gmail.com');

// await page.waitForTimeout(5000);

const mnth = await page.locator('#SELECTOR_1');

await mnth.selectOption('January');

await page.waitForTimeout(2000);

const day = await page.locator('#SELECTOR_2');

await day.selectOption('20');

await page.waitForTimeout(2000);

const year = await page.locator('#SELECTOR_3');

await year.selectOption('1994');

await page.waitForTimeout(2000);



// await page.screenshot


});



