const mongoose = require('mongoose');
const {Schema}= mongoose;
main().then(()=>{
    console.log("Connection successfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/reldemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
 const orderSchema=new Schema({
    item:String,
    price:Number,
 })

 const customerSchema=new Schema({
    name:String,
    orders:[{
        type:Schema.Types.ObjectId,
        ref:"Order"
    }]
 })
 const Order=mongoose.model("Order",orderSchema);
  const Customer=mongoose.model("Customer",customerSchema);
//  const addOrder=async()=>{
//    let result = await Order.insertMany([
//        { item:"Samosa",
//         price: 30  },
//         {item: "Burger",
//             price: 60,
//         },
//         {
//             item: "Pizza",
//             Price: 120,
//         }
//     ])
//     console.log(result);
//  }
//  addOrder();
const addCustomer=async()=>{
   let cust1 = new Customer({
    name:"John",

})
let order1= await Order.findOne({item:"Samosa"});
let order2= await Order.findOne({item:"Pizza"});
cust1.orders.push(order1);
cust1.orders.push(order2);
let result= await cust1.save();
console.log(result);
}
addCustomer();