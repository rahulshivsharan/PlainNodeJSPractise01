var util = require("util");

var $eventEmitter = require("events").EventEmitter;

var Ticker = function(){
	var that = this;

	setInterval(function(){
		that.emit("tick");
	},1000);
}

util.inherits(Ticker,$eventEmitter);


var ticker = new Ticker();

ticker.on("tick",function(){
	console.log("Tick "+(new Date()).getTime());
});