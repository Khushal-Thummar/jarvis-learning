const fs = require("fs");

const data = fs.readFileSync("jarvis.json","utf8");

const jarvis = JSON.parse(data);

console.log("JARVIS INFORMATION");
console.log("------------------");
console.log("Name:"+jarvis.name);
console.log("Version:"+jarvis.version);
console.log("Status:"+jarvis.status);
console.log("Purpose:"+jarvis.purpose);