var ONE_SECOND = 1000;

function executInTime(){
	var d = new Date();
	
	var str = 	d.getHours() + ":" + 
				d.getMinutes() + ":" + 
				d.getSeconds() + ":" + 
				d.getMilliseconds();

	console.log("Tick "+str);
}

var interval = setInterval(executInTime,ONE_SECOND);

var TEN_SECOND = ONE_SECOND * 10;
setTimeout(function(){
	clearInterval(interval);
},TEN_SECOND);