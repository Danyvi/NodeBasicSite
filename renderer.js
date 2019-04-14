var fs = require('fs');
// we want to render our templates to the response
// Function that handles the reading of files (templates that we have) and merge in value
//    read from file and get a string
//         merge values in to string (do a quick search of template files and populate the information that we get from the json from Treehouse)

function view(templateName, values, response) {
  // Read from the template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html');
  // Insert values into ht e content

  // write out the content to the response
  response.write(fileContents);
}

module.exports.view = view;
