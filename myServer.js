let http = require('http');

let server = http.createServer((function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
}));

//trial
server.listen(8000);
