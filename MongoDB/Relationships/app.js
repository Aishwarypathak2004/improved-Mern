const mongoose=require ("mongoose");

main().then(()=>{
    console.log("Connection successfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/reldemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema=new mongoose.Schema({

username:String,
addresses:[{
    _id: false,
    location: String,
    city:String,
}]


}

)
const user=mongoose.model("user",userSchema);
const addUsers=async()=>{
    let user1=new user({
        username:"Ram",
        addresses:[{
      
        location:"7 tulkun makhtum street",
        city:"Tashkent"}]
    })
    user1.addresses.push({location:"5 New york street",city:"New york"});
    let result =await user1.save();
    console.log(result);
}
addUsers();