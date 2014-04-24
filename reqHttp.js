// making the http required that way we can create a new server
var http = require('http'); 

// Create an HTTP tunneling proxy
var myServer = http.createServer(function (req,res) {//creating the server
	res.writeHead(200, {'Content-Type':'application/json'});//response will be json data
	res.end('{greeting: "Hello World"}');// this will be the response
});
myServer.listen(1234, '127.0.0.1');