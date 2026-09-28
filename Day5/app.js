const fs=require("fs").promises;
const readline=require("readline");


const rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

async function saveMemory(memory){

	try{

		await fs.appendFile("JarvisNotes.txt","\n"+memory);

		console.log("Jarvis: Memory saved successfully.");
	
	}catch(error){
	
		console.log("Jarvis: Could not saved memory.");

	}	

}

async function saveMemories(){

	try{
		
		const data = await fs.readFile("JarvisNotes.txt","utf8");

		console.log("");
		console.log("===== JARVIS MEMORY =====");
		console.log(data);
		console.log("=========================");
		console.log("");

	}catch(error){

		console.log("Jarvis: No memories found.");
	}
}

rl.question("Jarvis:What should I remember?",async function(memory){

	await saveMemory(memory);

	await saveMemories();

	rl.close();

});