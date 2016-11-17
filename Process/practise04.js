function MyThing(){
	var self = this;
	self.getReadyForStuff = getReadyForStuff;
	self.startDoingStuff = startDoingStuff;

	process.nextTick(function(){
		self.startDoingStuff();
	});

	function startDoingStuff(){
		console.log("Start doing stuff");
	} 

	function getReadyForStuff(){
		console.log("Getting Ready for Stuff");
		var ZERO = 0;
		
		setTimeout(function(){
			console.log("Fetching some data to get ready.");
		},ZERO);
	}
	
}

var thing = new MyThing();
thing.getReadyForStuff();