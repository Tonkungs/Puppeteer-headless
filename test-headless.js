const puppeteer = require('puppeteer');

(async () => {
  // แบบธรรมดา
  // const browser = await puppeteer.launch();
  // เชื่อมต่อไปยัง ws 
  const browser = await puppeteer.connect({ browserWSEndpoint: 'ws://localhost:3000' });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();