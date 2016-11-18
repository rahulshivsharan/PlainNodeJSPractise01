var fs = require("fs"),
	FILE_URL = "./myfile.txt";

function readFile(filePath){
	fs.exists(filePath,function(exists){
		console.log(" exists "+exists);
		
		fs.readFile(filePath,function(err,data){
			console.log(data.toString());
		});
	});
}


//readFile(FILE_URL);
FILE_URL = "./sourceFile.txt";
readFile(FILE_URL);