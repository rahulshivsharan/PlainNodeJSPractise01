function myTimeout(time,msg){
	setTimeout(function(){
		console.log("TIMEOUT "+msg);
	},time);	
}

function fn(name){
	return f;

	function f(){
		var n = name;
		console.log("basic fn call, single thread "+n+", ");		
	}
}

var ZERO = 0;

fn("ONE")();
myTimeout(ZERO,"AFTER-ONE");
fn("TWO")();
myTimeout(ZERO,"AFTER-TWO");
fn("THREE")();
myTimeout(ZERO,"AFTER-THREE");
fn("FOUR")();