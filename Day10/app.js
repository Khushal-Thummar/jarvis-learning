const events = require("./events");

events.jarvisEvents.on("online",function(){
	console.log("Jarvis:System is online.");
});

events.jarvisEvents.on("task-start",function(task){
	console.log("ID:",task.id);
	console.log("Jarvis Task");
	console.log("Name:",task.name);
	console.log("Status:",task.status);
	console.log("Created At:",task.createdAt);
});

events.jarvisEvents.on("task-complete",function(task){
	console.log("ID:",task.id);
	console.log("Jarvis Task");
	console.log("Name:",task.name);
	console.log("Status:",task.status);
	console.log("Created At:",task.createdAt);
});

events.jarvisEvents.on("task-failed",function(task){
	console.log("ID:",task.id);
	console.log("Jarvis Task");
	console.log("Name:",task.name);
	console.log("Status:",task.status);
	console.log("Created At:",task.createdAt);
});

events.startJarvis();

events.startTask("Learn NodeJs EventEmmiter");

events.completeTask("Learn NodeJs EventEmmiter");

events.startTask("Read a missing file.");

events.failTask("Read a missing file");