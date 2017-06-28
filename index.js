// Load the http module to create an http server.
const http = require('http');
const hostname = require('os').hostname();
// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end(`Hello World\n from ${hostname}`);
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log(`Server running at http://${hostname}:8000/`);
