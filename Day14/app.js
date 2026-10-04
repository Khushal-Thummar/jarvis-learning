const os = require("os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const cpu = os.cpus();

const jarvisSystem = {
	platform:os.platform(),
	architecture:os.arch(),
	cpu:{
		model:cpu[0].model,
		speedMHz:cpu[0].speed,
		cores:cpu.length
	},
	memory:{
		totalGB:(totalMemory/1024/1024/1024).toFixed(2),
		freeGB:(freeMemory/1024/1024/1024).toFixed(2)
	},
	homeDirectory:os.homedir(),
	hostName:os.hostname()
};

console.log("===== Jarvis System Status =====");
console.log(jarvisSystem);