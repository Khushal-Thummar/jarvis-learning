function getCurrentTime(){
	return new Date().toLocaleTimeString();
}
function getCurrentDate(){
	return new Date().toLocaleDateString();
}

module.exports={
	getCurrentTime,
	getCurrentDate
};