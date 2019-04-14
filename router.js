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
    response.write(username + '\n');
    response.end('Footer\n');
    //        we want to get the json from Treehouse
    //           on "end" (when all the data come back)
    //                show the profile
    //           on "error"
    //                show the error
  }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;
