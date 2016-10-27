var http = require("http");

var options = {
	"port" : 8033,
	"host" : "127.0.0.1",
	"method" : "GET"
}

var request = http.request(options,responseFn);

function responseFn(response){
	response.on("data",function(data){
		var obj = JSON.parse(data.toString()), studentObj = undefined;		
		
		for(var x = 0; x <  obj.data.length; x++){
			studentObj = obj.data[x];
			console.log("Student name : "+studentObj["name"]);
		}
	});	

	response.on("end",function(){
		console.log("response ended");
	});
}

request.end();
