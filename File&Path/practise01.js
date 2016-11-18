var fs = require("fs"),
	FILE_URL = "./myfile.txt";

fs.exists(FILE_URL,function(exists){
	console.log(" exists "+exists);
	
	fs.readFile(FILE_URL,function(err,data){
		console.log(data.toString());
	});
});