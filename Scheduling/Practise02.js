function timeout(){
	console.log("TIMED OUT");
}

var SECONDS = 1000 * 1;

var timeout_time = SECONDS * 3; // 3 seconds

var $timeout = setTimeout(timeout,timeout_time);

clearTimeout($timeout); 