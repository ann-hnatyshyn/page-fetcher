const needle = require("needle");
needle.get("http://www.example.edu/", (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML
});

const fs = require("fs").promises;

const fetcher = async() => {
  try {
    const filePath = "/Users/annhnatyshyn/lighthouse/page-fetcher";
    const fileDescriptor = await fs.open(filePath, "r");

    const content = "Some content!";
    fileDescriptor;
    await fs.writeFile("/Users/annhnatyshyn/lighthouse/page-fetcher", content);

    console.log("File written successfully");
  } catch (err) {
    console.log(err);
  }
};
fetcher();

// const fletcher = async function() {
//   try {
//     const content = 'Some content!';
//     await fs.appendFile(filePath, content);
//   } catch (err) {
//     console.log(err);
//   }
// };
// fletcher();
