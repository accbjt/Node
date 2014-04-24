//create a new server
var http = require('http');
var myServer = http.createServer(function(){});

//listener which emitted when new tcp stream is estabished
myServer.addListener('connection', function (){
	console.log("Connection......");
})

myServer.addListener('request', function (req,res) {
	res.writeHead(200,{'Content':'application/json'} );

	var myObject ={}//myObject is a object
	myObject['greeting'] = 'Hello World'; //object arrays
	myObject['date'] = new Date();//creates a date array
	myObject["user-agent"] = req.headers["user-agent"];//request detecting the browser name req.headers
	res.end(JSON.stringify(myObject, undefined, 2));//this is the response to JSON string format syntax-JSON.stringify(value[, replacer [, space]])

});
//server listener
myServer.listen(1234, '127.0.0.1');