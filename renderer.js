var fs = require('fs');

// function that mergers the values with the content
function mergeValues(values, content) {
  // Cylcle over keys of these values (avatarUrl, username, badges, javascriptPoints in values from router.js)
  for (var key in values) {
    // replace all {{keys}} (that is an instance of the key) with the values that we passed in from the values object
    // we are getting dinamically getting the keys value from the 'values' dictionary we can use values[key]
    // this values.avatarUrl is the equivalent of (===) values["avatarUrl"] but since we are in the cycle we have to use:
    content = content.replace('{{ ' + key + ' }}', values[key]);
  }
  // return the merged content
  return content;
}
// we want to render our templates to the response
// Function that handles the reading of files (templates that we have) and merge in value
//    read from file and get a string
//         merge values in to string (do a quick search of template files and populate the information that we get from the json from Treehouse)

function view(templateName, values, response) {
  // Read from the template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {
    encoding: 'utf8'
  });
  // Insert values into ht e content
  fileContents = mergeValues(values, fileContents);
  // write out the content to the response
  response.write(fileContents);
}

module.exports.view = view;
