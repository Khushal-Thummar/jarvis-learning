const analyzeFile = require("./fileAnalyzer");

const files = [
	"app.js",	
	"JarvisNotes.txt",
	"config.json",
	"memory.bat"
];

console.log("=====JARVIS FILE ANALYZER");

files.forEach(function(file){

	const info = analyzeFile(file);
	
	console.log("\nFile:",info.fileName);	
	console.log("Extension:",info.extension);
	console.log("Directory:",info.directory);	
	console.log("Full path:",info.fullPath);
	console.log("Type:",info.type);
});