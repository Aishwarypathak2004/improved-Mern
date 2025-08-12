const express = require ("express");
const app=express();
const port=8080;
const path = require("path"); // Importing the path module to handle file paths
app.use(express.static(path.join(__dirname,"public"))); // Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname,"/public/js"))); // Serve static JavaScript files from the 'public/js' directory
app.set("view engine","ejs"); // Set EJS as the template engine this is used to render views
app.set("views",path.join(__dirname,"/views")); // Set the directory for views 
// path.join is used to create a path that works across different operating systems
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/hello",(req,res)=>{
    res.send("Hello from the server!");
})
app.get("/ig/:username",(req,res)=>{
    const instadata= require("./data.json");
    let username= req.params.username; // Extracting the username from the URL parameters
    let data = instadata[username]; // Accessing the data for the specific username from the JSON file
    console.log(instadata);
   
    res.render("ig.ejs",{data}) // Render the ig.ejs view
   
})
app.listen(port,()=>{
    console.log(`Server is running on port no ${port}`);
});