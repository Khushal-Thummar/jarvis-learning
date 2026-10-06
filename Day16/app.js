const EventEmitter = require("events");

const jarvis = new EventEmitter();

jarvis.on("online",function(){
	console.log("Jarvis: System is online. 😊");
});	

jarvis.on("task",function(taskName){
	console.log("Jarvis: Task Received  -> ",taskName);
});

jarvis.on("started",function(taskName){
	console.log("Jarvis: Task started -> ",taskName);
});

jarvis.on("completed",function(taskName){
	console.log("Jarvis:Task completed ->" ,taskName);
});

jarvis.on("completed",function(taskName){
	console.log("Jarvis:Saving task to memory -> ",taskName);
});

const task = "Learn NodeJs EventEmitter.";

jarvis.emit("online");

jarvis.emit("task",task);

jarvis.emit("started",task);

jarvis.emit("completed",task);