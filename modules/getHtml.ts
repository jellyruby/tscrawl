import puppeteer from 'puppeteer';


async () => {

    const browser = await puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();
        
    await page.setViewport({
        width: 1366,
        height: 768
    });


}
