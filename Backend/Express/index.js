const express = require('express');
const app = express();

// Log the express app object (optional for debugging)
console.log(app);

// Define the port
let port = 8080;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Route: Root path

app.post("/", (req, res) => {  // handling POST request to root path
    res.send("You sent a post request to path");
});
app.get("/:username/:id",(req,res)=>{
    let {username,id}= req.params; // Extracting parameters from the URL
    let htmlstr=`<h1>Hello ${username} with id ${id}</h1>`
    res.send(htmlstr); // Sending a response with the parameters

})
app.get("/search", (req, res) => { // handling GET request to /search path
    let {q}= req.query;
   
    if(!q){
        res.send("Please provide a search query");
    }
    res.send(`You searched for ${q}`); })// Sending a response with the query parameter
// app.use((req,res)=>{
//     console.log(req)
//     console.log ("Requet recived")
//     res.send("Hello from Express server") // This will send a response to the client

// }) // app. use is used to define middleware that will run for every request