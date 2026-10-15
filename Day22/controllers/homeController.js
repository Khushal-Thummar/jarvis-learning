const homeService = require("../services/homeService");

function getHome(req,res){
    res.send(homeService.getHomeMessage());
}
function getAbout(req,res){
    res.send(homeService.getAboutMessage());
}
function getStatus(req,res){
    res.json(homeService.getStatus());
}

module.exports = {
    getHome,
    getAbout,
    getStatus
};