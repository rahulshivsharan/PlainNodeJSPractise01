function fn(name){
	return f;

	function f(){
		var n = name;
		console.log("PROCESS.NextTICK "+n+", ");		
	}
}

function myTimeout(time,msg){
	setTimeout(function(){
		console.log("TIMEOUT "+msg);
	},time);	
}

var ZERO = 0;

process.nextTick(fn("ONE"));
myTimeout(ZERO,"AFTER-ONE");
process.nextTick(fn("TWO"));
myTimeout(ZERO,"AFTER-TWO");
process.nextTick(fn("THREE"));
myTimeout(ZERO,"AFTER-THREE");
process.nextTick(fn("FOUR"));
myTimeout(ZERO,"AFTER-FOUR");

