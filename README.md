# cors-proxy-github

I recently ran into a CORS error when making requests to GitHub from a client-side application in development. As a solution, I built a Firebase cloud function to serve as a proxy, using express middleware to add a necessary `Access-Control-Allow-Origin: *` header. The function then returns the requested JSON data to the application.

### Try it out!

The Firebase cloud function is live to use. Simply replace the URL parameters with your target path: `/:gituser/:repo/:file/:token?`. The `token` paramter is optional and is intended for use with private repos.

    curl https://us-central1-cors-proxy-github.cloudfunctions.net/app/stephmod/cors-proxy-github/example

### Inspiration

https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9