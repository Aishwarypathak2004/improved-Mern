const express=require("express");
const app=express();
const path=require("path")
const mongoose=require("mongoose");
const chat=require("./models/chat.js");
const methodOverride= require("method-override")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

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
    res.redirect("/chats");
})

app.get("/chats", async (req,res)=>{
    let chats= await chat.find({});
    console.log(chats);
    res.render("index.ejs" ,{chats})
})
app.get("/chats/new",(req,res)=>{
    res.render("newchat.ejs")
})
app.post("/chats",(req,res)=>{
    let {from,msg,to}=req.body;
    let newchat=new chat({
        from: from,
        to:to,
        msg:msg,
        created_at: new Date(),
    })
    newchat.save().then((res)=>{
      console.log("chat added");

    })
    .catch((err)=>{
        console.log(err);
    })
      res.redirect("/chats");
})
app.get("/chats/:id/edit", async(req,res)=>{
    let{id}=req.params;
    let mainchat=await chat.findById(id);
    res.render("edit.ejs",{mainchat});
    
})
app.put("/chats/:id", async(req,res)=>{
    let{id}=req.params;
    let {msg:newmsg}=req.body;
    let updatedchat= await chat.findByIdAndUpdate(id,{msg:newmsg},{runValidators:true,new:true})
    console.log(updatedchat)
    res.redirect("/chats")

    
})
app.delete("/chats/:id",async(req,res)=>{
     let{id}=req.params;
     let dltedchat= await chat.findByIdAndDelete(id);
     console.log(dltedchat);
     res.redirect("/chats");




})

app.listen(8080,()=>{

    console.log("listning on port 8080...")
});