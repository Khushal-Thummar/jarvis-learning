function getHomeMessage(){
    return "Welcome to NexTrade";
}
function getAboutMessage(){
    return "About NexTrade";
}
function getStatus(){
    return {
        app:"NexTrade",
        status:"running",
        version:"1.0.0"
    };
}

module.exports={
    getHomeMessage,
    getAboutMessage,
    getStatus
};