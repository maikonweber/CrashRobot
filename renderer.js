// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
import { puppeteer } from "puppeteer";


const puppeteerOptions = {
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized", "--disable-notifications", "--disable-infobars", "--disable-web-security", "--disable-blink-features=AutomationDetection"]
}

async function getStartNewLine (usename, password) {
  // Start Puppeter 
  const browser = await  puppeteer.launch(puppeteerOptions);
  const page = await browser.newPage(); 
  await page.goto('https://blaze.com/en/games/crash');
  await page.waitForTimeout(15000);
  let login = await page.$$('.link');
  await login[0].click();
  await page.waitForTimeout(5000);
   let result = await page.$$('#auth-modal');
    let input = await result[0].$$('input');
    await input[0].type(usename);
    await input[1].type(password);
    await page.waitForTimeout(5000);
    // Send Key 
    await page.keyboard.press('Enter');
    let Button = await page.$$('Button');
    Button.forEach(element => {
      
    });




document.querySelector("button").addEventListener("click", async function() {
    const result = await getStartNewLine("m.carvalho@grouplinknetwork.com", "Ma128sio4");
    document.querySelector("#result").innerHTML = result;
})
}
