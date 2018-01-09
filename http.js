var http = require("http");
http.createServer(function (request,response) {
    response.writeHead(200,{"Content-type":"text/plan"});
    response.end("Node\n");
}).listen("8002");

console.log("http://localhost:8002");