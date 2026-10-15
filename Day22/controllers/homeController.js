function getHome(req,res){
    res.send("Welcome to NexTrade!");
}
function getAbout(req,res){
    res.send("About NexTrade");
}
function getStatus(req,res){
    res.json({
        app:"NexTrade",
        status:"running",
        version:"1.0.0"
    });
}

module.exports={
    getHome,
    getAbout,
    getStatus
};