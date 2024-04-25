async function takePDFScreenshot(url, waitTime = 15000) {
  // Milliseconds
  const puppeteer = require("puppeteer");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  await new Promise((resolve) => setTimeout(resolve, waitTime));

  const filename = `screenshot-${Date.now()}.png`; // Generate unique filename

  await page.screenshot({ path: filename }); // Save screenshot to a file

  const imageBuffer = fs.readFileSync(filename); // Read file as buffer

  await browser.close();
  // await fs.promises.unlink(filename); // Clean up temporary file

  return imageBuffer; // Return the image buffer data
}

// Include the 'fs' module for file operations
// const fs = require("fs");

// Export the function to be used in other modules
module.exports = takePDFScreenshot;
