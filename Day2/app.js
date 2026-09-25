const os=require("os");
const path=require("path");
const fs=require("fs");
const chalk=require("chalk");

let jarvisFile="Jarvis.txt";

let systemInfo={
	name:"Jarvis",
	version:1.0,
	status:"online",
	operatingSystem:os.platform(),
	architecture:os.arch(),
	cpuCors:os.cpus().length,
	nodeVersion:process.version
}

console.log(chalk.blue("================================"));
console.log(chalk.green("        JARVIS SYSTEM"));
console.log(chalk.blue("================================"));


console.log("Name: ",systemInfo.name);
console.log("Version: ",systemInfo.version);
console.log("Status: ",systemInfo.status);
console.log("Operating System: ",systemInfo.operatingSystem);
console.log("Architecture: ",systemInfo.architecture);
console.log("CPU Cores: ",os.cpus().length,);
console.log("NodeJs Version: ",systemInfo.nodeVersion);

console.log("--------------------------------");
console.log("File: ",path.basename(jarvisFile));
console.log("Extension: ",path.extname(jarvisFile));
console.log("Home Directory: ",os.homedir());

fs.writeFileSync(
	jarvisFile,
	"JARVIS System Monitor\n"+
	"Status: Online\n"+
	"Operating System: "+systemInfo.operatingSystem +"\n"+
	"NodeJs Version: "+systemInfo.nodeVersion +"\n"
);

console.log("--------------------------------");
console.log("System Report Save Sucessfully.");
