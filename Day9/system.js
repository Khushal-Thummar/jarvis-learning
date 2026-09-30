const os = require("os");

function getSystemInfo(){
	return{

		operatingSystem:os.platform(),
		architecture:os.arch(),
		cpuCores:os.cpus().length,
		nodeVersion:process.version
	};	
}

module.exports={

	getSystemInfo
};