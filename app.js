// Problem: We need a simple way to look at user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile look ups and serve our template via HTTP

// 1. Create a webserver

// 2. Handle the HTTP route GET / and POST / i.e. Home
//    if the url == "/" && GET
//        show the search field
//    if the url == "/" && POST
//        redirect to /:username

// 3. Handle HTTP route GET /:username i.e. /chalkers
//    if the url == "/...." (anything)
//        we want to get the json from Treehouse
//           on "end" (when all the data come back)
//                show the profile
//           on "error"
//                show the error

// 4. Function that handles the reading of files (templates that we have) and merge in value
//    read from file and get a string
//         merge values in to string (do a quick search of template files and populate the information that we get from the json from Treehouse)
