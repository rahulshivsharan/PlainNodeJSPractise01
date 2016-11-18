function MyDatabaseOperation(){
	var self = this;
	self.openConnection = openConnection;
	self.executeQuery = executeQuery;
	self.closeConnection = closeConnection;

	function openConnection(){
		console.log("The connection with Database is created");
	} 

	function executeQuery(sql){		
		self.openConnection();
		setTimeout(function(){
			console.log("execute query \""+sql+"\"");
			process.nextTick(function(){
				self.closeConnection(sql);
			});				
		},0);
	}

	function closeConnection(q){
		console.log("Closing the connection for query \""+q+"\"");
	}
}

var database = new MyDatabaseOperation();
database.executeQuery("select * from Student");
database.executeQuery("insert into student");
