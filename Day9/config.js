const config = {
	name:process.env.JARVIS_NAME || "Jarvis",
	mode:process.env.JARVIS_MODE || "development",
	status:process.env.JARVIS_STATUS || "online"
};

module.exports =config;