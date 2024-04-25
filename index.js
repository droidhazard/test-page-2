const express = require("express");
const takePDFScreenshot = require("./dld");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});

app.get("/status", (request, response) => {
  const status = {
    status: "running",
  };
  response.send(status);
});

app.post("/file", (request, response) => {
  // const screenshot = takePDFScreenshot(
  //   "https://file-examples.com/wp-content/storage/2017/10/file-example_PDF_500_kB.pdf",
  //   10000
  // );
  const url = request.body.file_url;
  let screenshotData = "0";
  (async () => {
    screenshotData = await takePDFScreenshot(url, 15000);
    response.setHeader("Content-Type", "image/png");
    // console.log(screenshotData);

    console.log("Screenshot data retrieved successfully!");
    const status = {
      status: "fine",
      file: screenshotData,
    };
    response.send(screenshotData);
    // You can further process the screenshotBlob data here
  })();
});
// h
