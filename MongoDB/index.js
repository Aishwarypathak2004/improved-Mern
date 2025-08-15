// Using Node.js `require()`
const mongoose = require('mongoose');

main().then()
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema=new mongoose.Schema({
    name: String,
    email:String,
    age: Number,

})
// const user=mongoose.model("User",userSchema);
const employee=mongoose.model("employee",userSchema);
employee.findByIdAndUpdate("689f06dad3226a4a7d20a4dd",{age:37},{new:true}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
// employee.findById("689f06dad3226a4a7d20a4dd").then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// employee.insertMany(
//    [
//   {
//     name: "Aarav Mehta",
//     email: "aarav.mehta@workmail.com",
//     age: 29
//   },
//   {
//     name: "Riya Kapoor",
//     email: "riya.kapoor@company.org",
//     age: 26
//   },
//   {
//     name: "Kunal Sharma",
//     email: "kunal.sharma@corporate.net",
//     age: 29
//   },
//   {
//     name: "Riya Kapoor",
//     email: "riya.kapoor2@company.org",
//     age: 24
//   },
//   {
//     name: "Vikram Singh",
//     email: "vikram.singh@enterprise.org",
//     age: 35
//   },
//   {
//     name: "Ananya Gupta",
//     email: "ananya.gupta@office.net",
//     age: 26
//   },
//   {
//     name: "Rohit Malhotra",
//     email: "rohit.malhotra@workplace.com",
//     age: 31
//   },
//   {
//     name: "Ananya Gupta",
//     email: "ananya.gupta2@office.net",
//     age: 27
//   },
//   {
//     name: "Nikhil Bansal",
//     email: "nikhil.bansal@agency.net",
//     age: 30
//   },
//   {
//     name: "Ishita Rao",
//     email: "ishita.rao@startup.com",
//     age: 35
//   }
// ]

// ).then((res)=>{
//     console.log(res);
// })



// const employee1=new employee({
//     name: "Rajendar",
//     email: "rajendarsingh@yahoo.in",
//     age:47
// })
//  employee1
//  .save()
//  .then((res)=>{

//     console.log(res);

    
//  })
//  .catch((err)=>{
//     console.log(err);
//  })

// Import the mongoose library to interact with MongoDB
// Call the main() function to establish MongoDB connection
// Handle success or error from the main() function
// Define an async function to connect to the MongoDB server
// Connect to MongoDB at localhost on port 27017, database name 'test'
// (Optional) Use a connection string with username and password if authentication is enabled
// Define a schema to describe the structure of employee documents
// Each employee has a name (String), email (String), and age (Number)
// Create a model named "employee" based on the defined schema
// Update a specific employee document by its _id
// Change the 'age' field to 37 and return the updated document
// Log the updated document to the console on success
// Log any errors that occur during the update operation
// (Commented) Find an employee document by its _id
// (Commented) Insert multiple employee documents into the collection
// (Commented) Create a single employee document instance
// (Commented) Save the newly created employee document to the database
// (Commented) Log the saved document on success
// (Commented) Log any errors that occur during save operation
