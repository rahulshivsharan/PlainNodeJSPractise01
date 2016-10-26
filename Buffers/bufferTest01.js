var buffer = new Buffer("Hello World");
var content = undefined;


for(var x = 0; x < buffer.length; x++){
	content = buffer.slice(x,(x+1));	
	console.log(" "+content);
}


var bufferOne = new Buffer("This is China");
var bufferTwo = new Buffer(20),
	startTarget = 0,
	sourceStart = 8,
	sourceEnd = 0;
var bufferLength = bufferOne.length;
sourceEnd = bufferLength;
console.log("Buffer length "+bufferLength);
bufferOne.copy(bufferTwo,startTarget,sourceStart,sourceEnd);

console.log("Buffer1 "+bufferOne.toString());	
console.log("Buffer2 "+bufferTwo.toString());	

