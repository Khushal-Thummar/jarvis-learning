const http = require("http");
const os = require("os");

const server = http.createServer(function(req,res){
	
	if(req.url === "/"){
		res.writeHead(200,{

	
		"Content-Type":"application/json"
		
		});

		const response = {
	
			name:"Jarvis",
			status:"online",
			message:"Jarvis API is working."
		};
		res.end(JSON.stringify(response));
	}
	else if(req.url === "/status"){
		
		res.writeHead(200,{

			"Content-Type":"application/json"

		});

		const response = {

			status:"online",
			server:"Node.js",
			port:3000

		};
		res.end(JSON.stringify(response));

	}
	else if(req.url === "/message"){
		
		res.writeHead(200,{
	
			"Content-Type":"application/json"

		});

		const response = {
			
			message : "Hello ! I am your personal assistant."
		}
		res.end(JSON.stringify(response));

	}
	else if(req.url === "/system"){

		res.writeHead(200,{

			"Content-Type":"application/json"

		});
		
		const response = {

			operatingSystem:os.platform(),
			architecture:os.arch(),
			cpuCores:os.cpus().length,
			homeDirectory:os.homedir(),
			nodeVersion:process.version

		};
		res.end(JSON.stringify(response));

	}
	else if(req.url === "/stats"){

		res.writeHead(200,{

			"Content-Type":"application/json"

		});
		const response = {

			platform:process.platform,
			nodeVersion:process.version,
			processId:process.pid,
			memoryUsage:process.memoryUsage().rss

		};
		res.end(JSON.stringify(response));

	}
	else if(req.url === "/api"){
		
		res.writeHead(200,{

			"Cntent-Type":"application/json"
		});	
		const response = {
		
			name:"Jarvis",
			status:"online",
			server:{
				
				type:"NodeJs",
				port:3000
			},
			system:{
				
				operatingSystem:os.platform(),
				architecture:os.arch(),
				cpuCores:os.cpus().length,
				nodeVersion:process.version
			},	
			message:"JARVIS API is working."
		};
		res.end(JSON.stringify(response));
	
	}
	else{
		
		res.writeHead(404);
	
		const response = {

			error:"Route not found"

		};
	
		res.end(JSON.stringify(response));
	}
});

server.listen(3000,function(){

	console.log("JARVIS API server is running.");
	console.log("Open http://localhost:3000");
});