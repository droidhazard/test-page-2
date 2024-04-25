async function takePDFScreenshot(url, waitTime = 1000) {
  // Milliseconds
  const puppeteer = require("puppeteer");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  await new Promise((resolve) => setTimeout(resolve, waitTime));

  const screenshot = await page.screenshot({ fullPage: true });
  await browser.close();

  const screenshotBlob = Buffer.from(screenshot, "base64");

  return screenshotBlob; // Return the screenshot data instead of saving to a file
}

// Export the function to be used in other modules
module.exports = takePDFScreenshot;
