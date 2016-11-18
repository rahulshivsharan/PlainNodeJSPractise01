var fs = require("fs"),
	FILE_URL = "./myfile.txt";

readFile(FILE_URL);

FILE_URL = "./sourceFile.txt";
readFile(FILE_URL);

function readFile(filePath){
	fs.open(filePath,'r',function(err,fd){
		if(err){
			throw err;
		}

		var readBuffer = new Buffer(1024),
			bufferOffset = 0,
			bufferLength = readBuffer.length,
			filePosition = 0;

		fs.read(fd,readBuffer,bufferOffset,bufferLength,filePosition,function(err,readBytes){
			if(err){
				throw err;
			}

			if(readBytes > 0){
				console.log(readBuffer.slice(0,readBytes).toString());
			}
		});	

	});
}


	