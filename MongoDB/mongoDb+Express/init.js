const mongoose=require("mongoose");
const chat=require("./models/chat.js");

main().then(()=>
    {
        console.log("Connection successful");
    }
)

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allchats=[{
    from: "yash",
    to:"Gullu",
    msg:"Send extra sheets",
    created_at: new Date(),
},
{
    from: "Aarav",
    to: "Riya",
    msg: "Meeting postponed to 4 PM",
    created_at: new Date()
},
{
    from: "Kunal",
    to: "Ananya",
    msg: "Please review my code",
    created_at: new Date()
},
{
    from: "Simran",
    to: "Vikram",
    msg: "Happy Birthday! ",
    created_at: new Date()
},
{
    from: "Nikhil",
    to: "Ishita",
    msg: "Send me the latest report",
    created_at: new Date()
},
{
    from: "Priya",
    to: "Rohit",
    msg: "Lunch at 1 PM?",
    created_at: new Date()
},
{
    from: "Meera",
    to: "Kabir",
    msg: "Project deadline is next Monday",
    created_at: new Date()
},
{
    from: "Raj",
    to: "Sanya",
    msg: "Check your email for the details",
    created_at: new Date()
},
{
    from: "Aditya",
    to: "Tara",
    msg: "Don't forget the meeting at 10",
    created_at: new Date()
},
{
    from: "Pooja",
    to: "Manish",
    msg: "Can you bring my notebook?",
    created_at: new Date()
},
{
    from: "Dev",
    to: "Shruti",
    msg: "Send the photos from yesterday",
    created_at: new Date()
}]

chat.insertMany(allchats).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})