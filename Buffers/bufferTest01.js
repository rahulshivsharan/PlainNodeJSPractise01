var buffer = new Buffer("Hello World");
var content = undefined;


for(var x = 0; x < buffer.length; x++){
	content = buffer.slice(x,(x+1));	
	console.log(" "+content);
}