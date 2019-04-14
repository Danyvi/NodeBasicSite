var Profile = require('./profile.js');
var renderer = require('./renderer.js');
var querystring = require('querystring');
var commonHeaders = { 'Content-Type': 'text/html' };
// Handle the HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
  //    if the url == "/" && GET
  if (request.url === '/') {
    if (request.method.toLowerCase() === 'get') {
      //      show the search field
      response.writeHead(200, commonHeaders);
      renderer.view('header', {}, response);
      renderer.view('Search', {}, response);
      renderer.view('Footer', {}, response);
      response.end();
    } else {
      // if url === "/" && POST
      // get the post data from body
      request.on('data', function(postBody) {
        // extract the username
        var query = querystring.parse(postBody.toString());
        response.writeHead(303, { Location: '/' + query.username });
        response.end();
        // and then redirect to /:username
      });
    }
  }
}
// Handle HTTP route GET /:username i.e. /chalkers
function userRoute(request, response) {
  //  if the url == "/...." (anything)
  var username = request.url.replace('/', '');
  if (username.length > 0) {
    response.writeHead(200, commonHeaders);
    renderer.view('header', {}, response);
    // this is where we get the json from Treehouse
    var studentProfile = new Profile(username);
    // on "end" (when all the data come back)
    studentProfile.on('end', function(profileJSON) {
      // show the profile
      // Store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };
      // Simple response
      renderer.view('profile', values, response);
      renderer.view('footer', {}, response);
      response.end();
    });
    // on "error"
    studentProfile.on('error', function(error) {
      // show the error
      renderer.view('error', { errorMessage: error.message }, response);
      renderer.view('Search', {}, response);
      renderer.view('footer', {}, response);
      response.end();
    });
  }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;
