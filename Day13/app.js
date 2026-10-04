const memory = process.memoryUsage();

const jarvisStatus = {
	nodeVersion:process.version,
	platform:process.platform,
	architecture:process.arch,
	processId:process.pid,
	currentDirectory:process.cwd(),
	memory:{
		rssMB:(memory.rss/1024/1024).toFixed(2),
		heapUsedMB:(memory.heapUsed/1024/1024).toFixed(2),
		heapTotalMB:(memory.heapTotal/1024/1024).toFixed(2)
	}
};

console.log("===== Jarvis Status =====");
console.log(jarvisStatus);
