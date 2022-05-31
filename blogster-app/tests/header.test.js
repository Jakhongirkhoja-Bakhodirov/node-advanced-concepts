const puppeteer = require('puppeteer');

test('add two numbers' , () => {
    const sum = 1 + 2;
    expect(sum).toEqual(3);
});

test('we launch browser' , async() => {
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000');
})