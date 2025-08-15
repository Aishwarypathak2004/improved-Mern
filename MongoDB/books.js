// Import the mongoose library to work with MongoDB
const mongoose = require('mongoose');

// Call the main() function to connect to the database
// Log a success message if the connection is established
// Log any connection errors if they occur
main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

// Define an asynchronous function to handle the database connection
async function main() {
  // Connect to the local MongoDB server, database name 'amazon'
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // Alternative connection string with authentication (if enabled)
  // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
}

// Define a schema for the 'book' collection
const bookSchema = new mongoose.Schema({
    title: {                // Book title
        type: String,       // Must be a string
        required: true      // Field is mandatory
    },
    author: {               // Book author
        type: String
    },
    price: {                // Book price
        type: Number,
        min:[1, "price too low"]
    },
    discount: {             // Discount percentage
        type: Number,
        default: 0          // Default value is 0
    },
    catrgory: {             // Book category
        type: String,
        enum: ["fiction", "non-fiction"] // Must be one of these two values
    },
    genere: [String]        // Array of genres (e.g., ["romance", "thriller"])
});

// Create a model named "book" based on the schema
const book = mongoose.model("book", bookSchema);

// Create a new book document using the model
// let book1 = new book({
//     title: "RD SHARMA CLASS XII",
//     author: "RD SHARMA",
//     price: 1200,
//     discount:10,
//     catrgory:"non-fiction",
//     genere:"Study"
// });

// // Save the new book document to the database
// book1.save()



// book.insertMany([{
//     title: "RD SHARMA CLASS XII",
//     author: "RD SHARMA",
//     price: 1200,
//     discount:10,
//     catrgory:"non-fiction",
//     genere:["Study"]
// },
// {
// title: "RD SHARMA CLASS XI",
//     author: "RD SHARMA",
//     price: 1100,
//     discount:10,
//     catrgory:"non-fiction",
//     genere:["Study"]},
// {
// title: "gone girl",
//     author: "eda willion",
//     price: 500,
//     discount:11,
//     catrgory:"fiction",
//     genere:["Study","romance","thrill"]},
// {
// title: "Notion",
//     author: "Raman",
//     price: 200,
//     discount:17,
//     catrgory:"non-fiction",
//     genere:["happiness","power"]}
// ])
// .then((res) => {
//     console.log(res); // Log the saved document
// })
// .catch((err) => {
//     console.log(err); // Log any errors during save
// });

book.findByIdAndUpdate("689f2d3aef70b010617ca3fe",{price:-200},{runValidators:true},{new:true}).then((res)=>{
    console.log(res);
})
.catch((err)=>{

    console.log(err.errors.price.properties.message);
})