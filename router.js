var Profile = require('./profile.js');

// Handle the HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
  //    if the url == "/" && GET
  if (request.url === '/') {
    //      show the search field
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n');
    //    if the url == "/" && POST
    //      redirect to /:username
  }
}
// Handle HTTP route GET /:username i.e. /chalkers
function userRoute(request, response) {
  //  if the url == "/...." (anything)
  var username = request.url.replace('/', '');
  if (username.length > 0) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Header\n');
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
      response.write(values.username + 'has ' + values.badges + ' badges\n');
      response.end('Footer\n');
    });
    // on "error"
    studentProfile.on('error', function(error) {
      // show the error
      response.write(error.message + '\n');
      response.end('Footer\n');
    });
  }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;
