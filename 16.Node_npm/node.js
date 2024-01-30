// Required package
var pdf = require("pdf-creator-node");
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'template.html'); // Assuming 'template.html' is in the same directory as your script
try {
  const content = fs.readFileSync(filePath, 'utf8');

  var users = [
    {
      name: "Shyam",
      age: "26",
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
  ];

  var document = {
    html: content, // Use the content read from the file
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "pdf",
  };

  var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
      height: "45mm",
      contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
      height: "28mm",
      contents: {
          first: 'Cover page',
          2: 'Second page', // Any page number is working. 1-based index
          default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
          last: 'Last Page'
      }
    }
  };

  pdf.create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
} catch (err) {
  console.error('Error reading the file:', err);
}
