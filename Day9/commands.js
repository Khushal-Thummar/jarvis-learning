const system = require("./system");
const time = require("./time");

function getCommands(){

	return [

		"hello",
		"status",
		"system",
		"time",
		"date",
		"help"
	];	
}
function hasCommand(command){
	return getCommands().includes(command);
}

function executeCommand(command){
	
	if(command === 'hello'){
		return "Jarvis: Hello Nice to meet you.";
	}
	else if(command === "status"){
		return "Jarvis:System is online."
	}
	else if(command === "time"){
		return time.getCurrentTime();
	}
	else if(command === "date"){
		return time.getCurrentDate();	
	}
	else if(command === "help"){
		return getCommands().join(", ");
	}
	else if(command === "system"){
		return system.getSystemInfo();
	}
	return "Jarvis:Unknown Command."
}

module.exports = {
	getCommands,
	hasCommand,
	executeCommand
};