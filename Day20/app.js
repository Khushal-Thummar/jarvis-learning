const express = require("express");

const app = express();
app.use(express.json());

//Home route
app.get("/",function(req,res){
	res.send("First Express server is running.");
});

//About route
app.get("/about",function(req,res){
	res.send("This server was built while learning NodeJs.")
});

//Status route

app.get("/status",function(req,res){
	res.json({
		application:"Day20 Express server",
		status:"online",
		nodeVersion:process.version
	});
});

//Route parameters
app.get("/users/:id",function(req,res){
	const userId=Number(req.params.id);
	
	if(!Number.isInteger(userId) || userId <=0){
		return res.status(400).json({
			error:"Invalid user ID.please provide a positive integer."
		});
	}

	res.json({
		message:"User found",
		userId:userId
	});
});

//Search User
app.get("/search",function(req,res){
	const name=req.query.name;
	const role=req.query.role;

	res.json({
		message:"Search completed",
		name:name,
		role:role
	});
});
app.post("/users",function(req,res){
	const name=req.body.name;
	const role=req.body.role;

	if(!name || !role){
		return res.status(400).json({error:"Name and role are required."});
	}
	res.status(201).json({message:"User created sucessfully.",user:{name:name,role:role}});
});

app.listen(3000,function(){
	console.log("Express server is running at http://localhost:3000");
});