const checkboxes = await page.$$('xpath');

for (const each of checkboxes){

    await expext(await each.isChecked()).toBeFalsy();

    await each.check();

    await page.waitforTimout(1000);
}

