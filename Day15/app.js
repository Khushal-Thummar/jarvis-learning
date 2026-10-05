const url = require("url");

function analyzeUrl(inputUrl){
	
	const parsedUrl = new URL(inputUrl);

	const parameters = {};

	parsedUrl.searchParams.forEach(function(value,key){
		parameters[key] = value;
	});

	return {
		protocol:parsedUrl.protocol,
		hostname:parsedUrl.hostname,
		port:parsedUrl.port,
		pathname:parsedUrl.pathname,
		parameters:parameters	
	};
}

const jarvisUrl = analyzeUrl("https://jarvis.local:3000/assistant?name=Jarvis&mode=learning&status=online");

console.log("===== Jarvis URL Analyzer =====");
console.log(jarvisUrl);