const express = require("express");
const router = express.Router();

//Import controller functions

const homeController = require("../controllers/homeController");

//Define routes

router.get("/",homeController.getHome);

router.get("/about",homeController.getAbout);

router.get("/status",homeController.getStatus);

router.get("/error",(req,res,next)=>{
    const error = new Error("Something went wrong!");
    next(error);
});

module.exports = router;
