// let h1=document.querySelector("h1");
// function colorchange(color,delay,nextfunction){
//     setTimeout(() => {
//         h1.style.color=color;
//         if(nextfunction) nextfunction();
//     } ,delay,nextfunction);
// }
// colorchange("red",2000,() => {
//     console.log("red done");
//     colorchange("orange",2000,()=>{
//         console.log("orange done");
//         colorchange("yellow",2000,()=>{
//             console.log("yellow done");
//             colorchange("green",2000,()=>{
//                 console.log("green done");
//                 colorchange("blue",2000,()=>{
//                     console.log("blue done");
//                     colorchange("indigo",2000,()=>{
//                         console.log("indigo done");
//                         colorchange("voilet",2000,()=>{
//                             console.log("voilet done");
//                         
//                         })
//                     })
//                 })
//             })
//         })
//     })
// }) 
  // this is called call back hell when the nesting of function becomes too confusing and thsts why we need PROMISES in javascript
   
  
  
  
  
  
  
  
  
  
  
  
  // now we will use promises to make it more readable and manageable 

//  let h1=document.querySelector("h1");
// function colorchange(color,delay){
//     return new Promise((resolve) => {
        
//     setTimeout(() => {
//         h1.style.color=color;
//         resolve("color changed to " + color);
//     } ,delay);
// })}
// colorchange("red",2000)
// .then((result)=>{
//     console.log(result);
//     return colorchange("orange",2000);
// })
// .then((result)=>{
//     console.log(result);
//     return colorchange("yellow",2000);

// })
// .then((result)=>{
//     console.log(result);
//     return colorchange("green",2000);

// })
// .then((result)=>{
//     console.log(result);
//     return colorchange("indigo",2000);

// })
// .then((result)=>{
//     console.log(result);
//     return colorchange("voilet",2000);

// })
// .then((result)=>{
//     console.log(result);
//     return colorchange("pink",2000);

// })
// .then((result)=>{
//     console.log(result);
//     return colorchange("white",2000);

// })
// .then((result)=>{
//     console.log(result);
//     return colorchange("red",2000);

// })








// lets use async and await to make it more readable

 let h1=document.querySelector("h1");
function colorchange(color,delay){
    return new Promise((resolve) => {
        
    setTimeout(() => {
        h1.style.color=color;
        resolve("color changed to " + color);
    } ,delay);
})}

 async function demo(){
   await colorchange("red",2000);
   await colorchange("orange",2000);
   await colorchange("yellow",2000);
   await colorchange("green",2000);
   await colorchange("indigo",2000);
   await colorchange("voilet",2000);
   await colorchange("pink",2000);
   await colorchange("white",2000);
   await colorchange("red",2000);
 }
 demo();
  // This code uses async and await to make the code more readable and manageable.