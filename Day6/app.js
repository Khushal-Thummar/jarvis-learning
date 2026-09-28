const http = require("http");
const os = require("os");
const fs = require("fs");

const server = http.createServer(function(req,res){

	if(req.url === '/'){

		res.writeHead(200,{

			"Content-Type":"text/html"
		});
		
		res.end(`
			<html>
				<head>
					<title>JARVIS AI Assistant</title>
				</head>
				<body>
					<h1>🤖 JARVIS ONLINE</h1>
					<p>Your personal AI assistant</p>
					<hr>
					
					<h2>JARVIS COMMANDS</h2>
					
					</hr>
					<ul>
						<li> <a href = "/hello">Hello</a> </li>
						<li> <a href = "/time">Time</a> </li>
						<li> <a href = "/system">System</a> </li>
						<li> <a href = "/status">Status</a> </li>
						<li> <a href = "/memory">Memory</a> </li>
						<li> <a href = "/commands">Commands</a> </li>
					</ul>
					
					<p>JARVIS NodeJs Server</p>
					
				</body>
			</html>
		`);

	}
	else if(req.url === '/hello'){
		res.writeHead(200,{

			"Content-Type":"text/html"
		});


		res.end("<h1>Jarvis: Hello nice to meet you.</h1>");

	}
	else if(req.url === '/time'){
		res.writeHead(200,{

			"Content-Type":"text/html"
		});


		res.end("<h1>Jarvis Time:"+ new Date().toLocaleTimeString()+"</h1>");

	}
	else if(req.url === '/system'){
		res.writeHead(200,{

			"Content-Type":"text/html"
		});


		res.end(`

			<h1>JARVIS System</h1>
			<p> Operating System:${os.platform()} </p>
			<p> Architecture:${os.arch()} </p>
			<p> CPU Cores:${os.cpus().length} </p>
			<p> Home Directory:${os.homedir()} </p>
			<p> NodeJs Version:${process.version}</p>


		`);

	}
	else if(req.url === '/status'){

		res.writeHead(200,{

			"Content-Type":"text/html"

		});
		res.end(`
			
			<h1>JARVIS Status</h1>
			<p>Status:Online</p>
			<p>Server:NodeJs</p>
			<p>Port:3000</p>
			<p>Message:JARVIS is ready to assist.</p>


		`);
	}
	else if(req.url === '/memory'){

		res.writeHead(200,{

			'Content-Type':'text/html'
	
		});
		
		const memory = fs.readFileSync("JarvisNotes.txt","utf8");
		res.end(`

			<h1>Jarvis Memory:</h1>
			<pre>${memory}</pre>

		`);

	}
	else if(req.url ==='/commands'){

		res.writeHead(200,{

			"Content-Type":"text/html"

		});
		res.end(`
			
			<h1>Jarvis Command:</h1>

			<ul>
			
				<li>hello - Greetings</li>
				<li>time - Current Time</li>
				<li>system - System Information</li>
				<li>status - Server Status</li>
				<li>memory - Jarvis Memory</li>
				<li>commands - Available commands</li>

			</ul>
		`);

	}
	else{

		res.writeHead(404,{
			
			"Content-Type":"text/html"
	
	});
		res.end("<h1>Jarvis: Page not found.</h1>");

	}

	
});


server.listen(3000,function(){

	console.log("Jarvis Web server is running.");
	console.log("Open http://localhost:3000");

});