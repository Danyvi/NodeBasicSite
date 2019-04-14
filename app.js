var router = require('./router.js');
// Problem: We need a simple way to look at user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile look ups and serve our template via HTTP

// Create a webserver
var http = require('http');
http
  .createServer(function(request, response) {
    router.home(request, response); // homeRoute handler
    router.user(request, response);
  })
  .listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

// Function that handles the reading of files (templates that we have) and merge in value
//    read from file and get a string
//         merge values in to string (do a quick search of template files and populate the information that we get from the json from Treehouse)
