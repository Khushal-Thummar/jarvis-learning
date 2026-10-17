const express = require("express");

const app = express();
const PORT=3000;

//Request logging middleware
app.use((req,res,next)=>{
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.url}`);
   next();
});

//Import the home router
const homeRouter = require("./routes/home");

//Register the router
app.use("/api",homeRouter);

//Error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.message);

    res.status(500).json({
        success:false,
        message:"Internal Server Error."
    });
});

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});