const path = require("path");

function getFileType(extension){
	if(extension === ".js"){
		return "JavaScript";
	}else if(extension === ".txt"){
		return "Text File";
	}else if(extension === ".json"){
		return "JSON File";
	}else if(extension === ".db"){
		return "Database File";
	}
	else{
		return "Unknown File.";
	}
}

function analyzeFile(fileName){
	
	const filePath = path.join(__dirname,fileName);

	return {
		fileName:path.basename(filePath),
		extension:path.extname(filePath),
		directory:path.dirname(filePath),
		fullPath:filePath,
		type:getFileType(path.extname(filePath))
	};
}

module.exports = analyzeFile;