const needle = require('needle');
needle.get('http://www.example.edu/', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


const fs = require('fs');
const filePath = '/Users/annhnatyshyn/lighthouse/page-fetcher';
fs.open(filePath, 'r', (err, data) => {
  if (err) {
    console.error('Error opening file:', err);
    return;
  }
  // Proceed with your file operations using the file descriptor `fd`
  console.log('File opened successfully', data.toString());
});







// const fletcher = async function() {
//   try {
//     const content = 'Some content!';
//     await fs.appendFile(filePath, content);
//   } catch (err) {
//     console.log(err);
//   }
// };
// fletcher();
