const EventEmitter = require("events");

const jarvis = new EventEmitter();

jarvis.on("started",function(task){
	console.log("Jarvis Task");
    	console.log("ID:", task.id);
    	console.log("Name:", task.name);
    	console.log("Status: running");
});

jarvis.on("completed",function(task){
	console.log("Jarvis Task");
    	console.log("ID:", task.id);
    	console.log("Name:", task.name);
    	console.log("Status: completed");
});

jarvis.on("failed",function(task){
	console.log("Jarvis Task");
    	console.log("ID:", task.id);
    	console.log("Name:", task.name);
    	console.log("Status: failed");
});

let taskId = 0;

function runTask(taskName,shouldFail){
		
	taskId++;

	const id = taskId;

	jarvis.emit("started",{
		id:id,
		name:taskName
	});

		setTimeout(function(){
		
			if(shouldFail){
				jarvis.emit("failed",{
					id:id,
					name:taskName
				});
			}else{
				jarvis.emit("completed",{
					id:id,
					name:taskName
				});
			}
		
		},2000);
}


runTask("Learn Async Events",false);

setTimeout(function(){
	runTask("Read missing file",true);
},3000);