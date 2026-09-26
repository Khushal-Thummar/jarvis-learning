const os = require("os");
const readline =require("readline");

const rl= readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

function showHelp(){
	console.log("");
	console.log("======Available commands:======");
	console.log("hello          - Say hello");
	console.log("help           - show commands");
	console.log("time           - show current time");
	console.log("date           - show today's date");
	console.log("system         - Show system information");
	console.log("clear          - clear screen");
	console.log("Who are you?   - about JARVIS");
	console.log("exit           - Close Jarvis");
	console.log("");
}
function showSystem() {
    console.log("");
    console.log("===== SYSTEM INFORMATION =====");
    console.log("Operating System: " + os.platform());
    console.log("Architecture: " + os.arch());
    console.log("CPU Cores: " + os.cpus().length);
    console.log("Home Directory: " + os.homedir());
    console.log("Node.js Version: " + process.version);
    console.log("==============================");
    console.log("");
}
function sayHello(){
	console.log("JARVIS: Hello! Nice to meet you!");
    	console.log("JARVIS: How can I help you?");
}

function showTime(){
	console.log("Jarvis: "+ new Date().toLocaleTimeString());
}
function showDate(){
	console.log("JARVIS: " + new Date().toLocaleDateString());
}
function aiInfo(){
	console.log("JARVIS: I am your personal AI assistant.");
}


function askCommand(){
	rl.question("JARVIS: Enter a command: ", function(command) {
	
		command=command.toLowerCase().trim();
	
		if(command === "hello"){
			sayHello();
		}
		else if(command === "help"){
			showHelp();
		}
		else if(command === "time"){
			showTime();
		}
		else if(command === "date"){
			showDate();
		}
		else if (command === "system") {
    			showSystem();
		}
		else if(command === "clear"){
			console.clear();
		}
		else if(command === "who are you?"){
			aiInfo();
		}
		else if(command === "exit"){
			console.log("Jarvis:Good Bye");
			rl.close();
			return;
		}
		else{
			console.log("I Don't Understand That command.");
		}

		askCommand();
	});
};


console.log("================================");
console.log("        JARVIS ONLINE");
console.log("================================");

askCommand();
