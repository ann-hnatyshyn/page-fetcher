const needle = require("needle");
needle.get("http://www.example.edu/", (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log("body:", body); // Print the HTML
});

const fs = require("fs").promises;

const fetcher = async() => {
  try {
    const filePath = "/Users/annhnatyshyn/lighthouse/page-fetcher/index.js";
    const URL = "http://www.example.edu";
    // Fetch the content from the URL
    const response = await needle.get(URL);
    // Write the fetched data to the file
    await fs.appendFile(filePath, response);
    console.log("File written successfully");
  } catch (err) {
    console.log(err.message);
  }
};
fetcher();