var util = require("util");

var MyEventEmitter = require("events").EventEmitter;

MyEventEmitter.prototype.onlyOnce = function(type,callback){
	var self = this;

	var listener = function(){
		self.removeListener(type,listener); // removing listener 
		callback.apply(self,arguments);
	}

	self.on(type,listener);
} 

var Ticker = function(){
	var self = this;

	MyEventEmitter.call(self);


	setInterval(function(){
		self.emit("tick");
	},500);
}

util.inherits(Ticker,MyEventEmitter);

var myTicker = new Ticker();

/*
myTicker.on("tick",function(){
	var d = new Date();
	
	var str = 	d.getDate() + " - " + 
				(d.getMonth()+1)  + " - " +
				d.getFullYear() + "  " + 
				d.getHours() + ":" + 
				d.getMinutes() + ":" + 
				d.getSeconds();

	console.log("Tick "+str);
});
*/

myTicker.onlyOnce("tick",function(){
	var d = new Date();
	
	var str = 	d.getDate() + " - " + 
				(d.getMonth()+1)  + " - " +
				d.getFullYear() + "  " + 
				d.getHours() + ":" + 
				d.getMinutes() + ":" + 
				d.getSeconds();

	console.log("Tick "+str);
});


