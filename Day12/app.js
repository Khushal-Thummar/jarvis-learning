const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"JarvisNotes.txt");

function saveMemory(memory){
	
	if(!fs.existsSync(filePath)){
		fs.writeFileSync(filePath,"Jarvis Memory Started.\n");
	}
	fs.appendFileSync(filePath,memory + "\n");

	console.log("Jarvis:Memory saved.");
}
function readMemory(){
	const memory = fs.readFileSync(filePath,"utf8");
	
	console.log("\n===== Jarvis Memory =====");
	console.log(memory);
}

saveMemory("Today I learned how to create reusable file function.");

readMemory();