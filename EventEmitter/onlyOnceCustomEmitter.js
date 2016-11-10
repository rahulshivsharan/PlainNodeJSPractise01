var util = require("util");

var CustomeEventEmitter = require("events").EventEmitter;

CustomeEventEmitter.prototype.onlyOnceEmit = function(eventName,callback){
	var self = this;

	var listenerFn = function(){
		self.removeListener(eventName,listenerFn);
		callback.apply(self,arguments);
	}

	self.on(eventName,listenerFn);
}

var Ticker = function(){
	var self = this;
	
	CustomeEventEmitter.call(self);

	setInterval(function(){
		self.emit("tick");
	},1000);
}

util.inherits(Ticker,CustomeEventEmitter);

var myTicker = new Ticker();

var callbackFn = function(){
	var d = new Date();
	
	var str = 	d.getHours() + ":" + 
				d.getMinutes() + ":" + 
				d.getSeconds();

	console.log("Tick "+str);
}

//myTicker.on("tick",callbackFn);
myTicker.onlyOnceEmit("tick",callbackFn);