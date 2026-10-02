const events = require("events");

const jarvisEvents = new events();

let taskId = 0;

function startJarvis(){
	jarvisEvents.emit("online");
}

function startTask(taskName){
	taskId++;
	const task = {
		id:taskId,
		name:taskName,
		status:"running",
		createdAt:new Date().toLocaleTimeString()	
	};
	jarvisEvents.emit("task-start",task);
}

function completeTask(taskName){
	const task = {
		id:taskId,
		name:taskName,
		status:"completed",
		createdAt:new Date().toLocaleTimeString()
	};
	jarvisEvents.emit("task-complete",task);
}

function failTask(taskName){
	const task = {
		id:taskId,
		name:taskName,
		status:"failed",
		createdAt:new Date().toLocaleTimeString()
	};
	jarvisEvents.emit("task-failed",task);	
}

module.exports = {
	jarvisEvents,
	startJarvis,
	startTask,
	completeTask,
	failTask
};