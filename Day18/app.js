const fs = require("fs");

function handleError(error){
	
	console.log("===== Jarvis Error =====");
	console.log("Message:",error.message);
	console.log("Name:",error.name);
	console.log("========================");
}

function readMemory(fileName){
	
	try{
		console.log("Jarvis:Reading Memory...");

		const memory = fs.readFileSync(fileName,"utf8");
		
		console.log("Jarvis Memory");
		console.log(memory);
	}catch(error){

	
		handleError(error);
	}
}

console.log("===== Jarvis Memory System =====");
readMemory("JarvisNotes.txt");
console.log("Jarvis:System continues running.");