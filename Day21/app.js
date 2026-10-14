const express = require("express");

const app = express();
const PORT=3000;

//Middleware
app.use((req,res,next)=>{
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.url}`);
   next();
});

//Route

app.get("/",(req,res)=>{
    res.send("Day 21:Express Middleware");
});

app.get("/about",(req,res)=>{
    res.send("About Day 21");
});
app.use((req,res,next)=>{
    if(req.query.block === 'true'){
        return res.status(403).send("Request blocked!");
    }
    next();
});

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});