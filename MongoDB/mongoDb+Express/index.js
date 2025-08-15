const express=require("express");
const app=express();
const path=require("path")
const mongoose=require("mongoose");
const chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(()=>
    {
        console.log("Connection successful");
    }
)

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




app.get("/",(req,res)=>{
    res.send("server working");
})

app.get("/chats", async (req,res)=>{
    let chats= await chat.find({});
    console.log(chats);
    res.render("index.ejs" ,{chats})
})
app.listen(8080,()=>{

    console.log("listning on port 8080...")
});