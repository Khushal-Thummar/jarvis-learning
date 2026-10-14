const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to NexTrade!");
});

router.get("/about",(req,res)=>{
    res.send("About NexTrade");
});

router.get("/status",(req,res)=>{
    res.json({
        app:"NexTrade",
        status:"running",
        version:"1.0.0"
    });
});

module.exports = router;