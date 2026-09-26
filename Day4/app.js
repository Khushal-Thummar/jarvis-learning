const fs = require("fs");

const readline = require("readline");

const rl= readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

function showMemories(note){
	
	fs.readFile("JarvisNotes.txt","utf8",function(error,data){
	
	if(error){
		console.log("Jarvis:I have no Memoris yet.");
		rl.close();
		return;
	}
	console.log("");
	console.log("===== JARVIS MEMORY =====");
	console.log(data);
	console.log("=========================");

	rl.close();
	});
}
showMemories();