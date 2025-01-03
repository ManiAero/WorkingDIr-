
const signupbtn = await page.locator(('xpath'));
await signupbtn.click();
await page.waitfortimout(3000);
await Page.screenshot ({path : 'C:\visual studio_Workspace\PlayWrightNew\screenshots',fullpage:true});