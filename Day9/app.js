const jarvis = require("./jarvis");
const system = require("./system");
const time = require("./time");
const config = require("./config");
const commands = require("./commands");

console.log("JARVIS CONFIGURATION");
console.log("====================");

console.log("Name:",config.name);
console.log("Mode:",config.mode);
console.log("Status:",config.status);

console.log("");

console.log(jarvis.sayHello());
console.log(jarvis.getStatus());
console.log(jarvis.getMessage());

console.log("");

console.log("JARVIS SYSTEM INFORMATION");
console.log(system.getSystemInfo());

console.log("");

console.log("Jarvis Time");
console.log(time.getCurrentTime());

console.log("");

console.log("Jarvis Date");
console.log(time.getCurrentDate());

console.log("");

console.log("Jarvis Available Commands");
console.log(commands.getCommands());

console.log("");

console.log("JARVIS COMMAND TEST");

const testCommands = [

	"hello",
	"status",
	"system",
	"time",
	"date",
	"help",
	"weather"
];

testCommands.forEach(function(command){
	console.log("");
	console.log("Command:",command);
	console.log("Response:",commands.executeCommand(command));
});