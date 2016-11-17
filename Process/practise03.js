process.nextTick(function(){
	
	var d = undefined,
		str = undefined;
	
	while(true){
		d = new Date();		
		str = 	d.getHours() + ":" + 
				d.getMinutes() + ":" + 
				d.getSeconds() + ":" + 
				d.getMilliseconds();

		console.log("TICK "+str);
	}
			
});

process.nextTick(function(){
	setInterval(function(){
		var d = new Date();
	
		var str = 	d.getHours() + ":" + 
					d.getMinutes() + ":" + 
					d.getSeconds() + ":" + 
					d.getMilliseconds();

		console.log("NEXT-TICK ?????????????????????????????????????????????? "+str);
		
	},100);
});