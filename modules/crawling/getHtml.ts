import puppeteer from 'puppeteer';


export const getHtml = async (url:string) => {

    const browser = await puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();
        
    await page.setViewport({
        width: 1366,
        height: 768
    });

    await page.goto(url);

    return await page.content();
}

