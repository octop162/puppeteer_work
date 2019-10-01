const puppeteer = require('puppeteer');
// const url = 'https://b.hatena.ne.jp';
// const url = 'https://tweetdeck.twitter.com/';
// const url = 'https://www.google.co.jp/maps/?hl=ja';
const url = 'https://www.nw-siken.com/';
const option = {
    "waitUntil": "networkidle0"
};

(async function () {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ],
        defaultViewport: {
            "width": 1024,
            "height": 768,
            "deviceScaleFactor": 1.25
        }
    });
    const page = await browser.newPage();
    const response = await page.goto(url, option);
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await browser.close();
})();