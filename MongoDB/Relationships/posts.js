const mongoose = require('mongoose');
const {Schema}= mongoose;
main().then(()=>{
    console.log("Connection successfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/reldemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema=new Schema({
    username:String,
    email:String,
})
 const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type: Schema.Types.ObjectId,
        reff: "User",
    }
 })
 const user=mongoose.model("User",userSchema);
 const Post=mongoose.model("Post",postSchema);

 const addData=async()=>{
    let user1=new user({
        username:"Alice",
        email:"alicenburgers0093@gmail.com"
    })
    let post2= new Post({

        content:"my content",
        likes: 10,

    })
    post2.user=user1;
    ;
    await post2.save();
    console.log(post2);
 }
 addData();