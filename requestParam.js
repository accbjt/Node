var http = require("http");
var url = require('url'); //accessing url

var myServer = http.createServer(function (){});//create server

myServer.addListener("request", function (req,res) {
	res.writeHead(200, {'Content-Type':'application/json'});

	var url_parsed = url.parse(req.url, true);// parse the url and is true to use the querystring module.

	var myObject = {};
	myObject['path'] = url_parsed.pathname;
	myObject['query'] = url_parsed.query;
	res.end(JSON.stringify(myObject, undefined, 2));
})

myServer.listen(1234, '127.0.01');