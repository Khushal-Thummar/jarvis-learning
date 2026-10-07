async function getTodo(id){

	try{

		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

		if(!response.ok){
			
			throw new Error(`API returned status ${response.status}`);
		}
		const data = await response.json();

		return data;

	}catch(error){
			
		console.log("Jarvis: API Error ->",error.message);
	}
}

async function startJarvis(){
	
	console.log("===== jarvis API System =====");
	
	 try {	
		const todo = await getTodo(1);
	
		console.log("Jarvis:Task Information");
		console.log("User Id:",todo.userId);
		console.log("Task Id:",todo.id);
		console.log("Title:",todo.title);
		console.log("Completed:",todo.completed);
	}catch(error){
		console.log("Jarvis:API Error ->",error.message);
	}
	console.log("Jarvis:System Continues Running");
}

startJarvis();