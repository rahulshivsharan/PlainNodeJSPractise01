var http = require("http");

var server = http.createServer(handleRequest);

var PORT = 8033;

function handleRequest(request,response){
	response.setHeader("Content-Type","application/json");
	var obj = {
		data : [
			{ "name" : "Rahul", "profession" : "Software Developer" },
			{ "name" : "Rohan", "profession" : "Designer" },
			{ "name" : "Ramesh", "profession" : "Office Clerk" },
			{ "name" : "Rajesh", "profession" : "Forest Officer" }
		]
	}
	response.end(JSON.stringify(obj));
}

server.listen(PORT,function(){
	console.log("Server is listening on port ",PORT);
});