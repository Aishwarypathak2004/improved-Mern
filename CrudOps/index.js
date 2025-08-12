const express=require ("express");
const app=express();
const path = require("path") // Importing the path module to handle file paths
const port=8080;
const { v4: uuidv4 } = require('uuid');
const  methodOverride = require('method-override') // Importing method-override to handle HTTP methods like PATCH and DELETE

app.use(methodOverride('_method')); // Middleware to override HTTP methods
app.use(express.urlencoded({extended : true})); // Middleware to parse URL-encoded bodies in post requests
app.set("view engine","ejs"); // Set EJS as the template engine this is used to render views
app.set("views",path.join(__dirname,"/views")); // Set the directory for views
app.set("public",path.join(__dirname,"/public")); // Set the directory for public files
let posts=[
    {   id:uuidv4(), // Generate a unique ID for each post 
        username:"avish",
        content:"I love programming",

    },
    {   id:uuidv4(),
        username:"lavish",
        content:"I also love programming",
        
    },
    {   id:uuidv4(),
        username:"Ravish",
        content:"I love programming too",
        
    }
]
app.get("/posts",(req,res)=>{
res.render("index.ejs",{posts}); // Send a response to the client
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs"); // Render a form to create a new post
} )// Render a form to create a new post)
app.post("/posts",(req,res)=>{
    let {username,content}=req.body; // Extracting username and content from the request body
    let id=uuidv4(); // Generate a unique ID for the new post
    posts.push({id,username,content}); // Adding the new post to the posts array
    res.redirect("/posts"); // Redirecting to the posts page to see the updated list
})
app.get("/posts/:id",(req,res)=>{
    let id=req.params.id; // Extracting the post ID from the URL parameters
     let post=posts.find((post)=>post.id===id); // Finding the post with the matching ID
    console.log(post);
    res.render("show.ejs",{post}); // Sending a response with the post ID
    
})
app.patch("/posts/:id",(req,res)=>{
    let id=req.params.id;
    let newcontent=req.body.content;
    let post=posts.find((post)=>post.id===id);
    
    console.log(newcontent); 
    post.content=newcontent; // Updating the content of the post with the new content
      // Extracting the post ID from the URL parameters
    console.log(post); // Log the ID to the console
     res.redirect("/posts"); // Log when a patch request is received
}) // Placeholder for handling patch requests to update a post
app.get("/posts/:id/edit",(req,res)=>{
    let id=req.params.id;
    
    let post=posts.find((post)=>post.id===id);
    res.render("editpost.ejs",{post}); // Render the edit form for the post with the given ID

}) // Placeholder for rendering the edit form for a post
app.delete("/posts/:id",(req,res)=>{
     let id=req.params.id;
     posts=posts.filter((post)=>post.id!==id); // Filter out the post with the given ID

    res.redirect("/posts"); // 
    
})
    
app.listen(port,()=>{
    console.log(`listning on port ${port}`);
}) // Start the server on port 8080