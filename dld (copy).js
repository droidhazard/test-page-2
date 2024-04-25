const puppeteer = require("puppeteer");

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto(
    "https://file-examples.com/wp-content/storage/2017/10/file-example_PDF_500_kB.pdf"
  );

  // Wait for 5 minutes (300,000 milliseconds)
  await new Promise((resolve) => setTimeout(resolve, 10000));

  // Take a screenshot of the page
  const screenshot = await page.screenshot({ fullPage: true });

  // Close the browser
  await browser.close();

  // Store the screenshot as blob data in a variable
  const screenshotBlob = Buffer.from(screenshot, "base64");

  // Save the screenshot as a file
  const fs = require("fs");
  fs.writeFileSync("screenshot.png", screenshotBlob);

  console.log("Screenshot saved as screenshot.png");

  // You can use the screenshotBlob variable for further processing if needed
})();
