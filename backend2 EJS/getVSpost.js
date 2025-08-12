   const express= require ("express");
const app=express();
const port=8080;
app.use(express.urlencoded({extended:true})); // Middleware to parse URL-encoded bodies in post requests
app.use(express.json()); // Middleware to parse JSON bodies in post requests
app.get("/register",(req,res)=>{  //get request is used to fetch data from the server
   let {user,password}= req.query;// get request has a limit of 1024 characters in the URL. we cannot exceed this limit
    res.send(`hello ${user} your password is ${password}`); //send the response back to the client
})
app.post("/register",(req,res)=>{ //post request is used to send data to the server
    let {user,password}= req.body; //post request can send large amount of data in the request body
    res.send(`hello ${user} yor password is : ${password}`); //post equest has no limit on the size of the data that can be sent in the request body
})

app.listen(port,()=>{
    console.log(`listning on port ${port}`);
});