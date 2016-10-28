var util = require("util");

var $eventEmitter = require("events").EventEmitter;

var Ticker = function(){
	var self = this;

	$eventEmitter.call(self);

	setInterval(function(){
		self.emit("tick");
	},1000);
}

util.inherits(Ticker,$eventEmitter);


var ticker = new Ticker();

ticker.on("tick",function(){
	var d = new Date();
	
	var str = 	d.getDate() + " - " + 
				(d.getMonth()+1)  + " - " +
				d.getFullYear() + "  " + 
				d.getHours() + ":" + 
				d.getMinutes() + ":" + 
				d.getSeconds();

	console.log("Tick "+str);
});