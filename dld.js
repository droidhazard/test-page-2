async function takePDFScreenshot(url, waitTime = 1000) {
  // Milliseconds
  const puppeteer = require("puppeteer");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  await new Promise((resolve) => setTimeout(resolve, waitTime));

  const screenshotData = await page.screenshot({ type: "png" }); // Capture screenshot as PNG buffer

  await browser.close();

  return screenshotData;
  // return new Blob([screenshotData], { type: "image/png" }); // Return screenshot data as Blob
}

// Export the function to be used in other modules
module.exports = takePDFScreenshot;
