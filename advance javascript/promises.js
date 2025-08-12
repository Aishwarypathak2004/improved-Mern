// function savetodb(data, success, failure) {
//     let internet = Math.floor(Math.random() * 10) + 1;
//     if (internet > 4) {
//         success(internet); // Pass speed
//     } else {
//         failure(internet); // Pass speed
//     }
// }


// savetodb("Hello i am on", (internet) => {
//     console.log("Success: your data was saved", internet, "MBps is the speed");

//     savetodb("doosra data", (internet) => {
//         console.log("Doosri success: data doosri bar saved", internet, "MBps is the speed");

//         savetodb("teesra data", (internet) => {
//             console.log("Teesri bar bhi success", internet, "MBps is the speed");
//         }, (internet) => {
//             console.log("Teesri bar fail ho gaya laadle", internet, "MBps is the speed");
//         });

//     }, (internet) => {
//         console.log("Doosri bar fail ho gaya laadle", internet, "MBps is the speed");
//     });

// }, (internet) => {
//     console.log("Failure: Slow Internet", internet, "MBps is the speed");
// });

// This code simulates saving data to a database with a random success or failure based on internet speed.

// this is called callback hell when the nesting of function becomes too confusing and that's why we need PROMISES in javascript



// now we will use promises to make it more readable and manageable
// promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// acynchronous operation is an operation that does not block the execution of the program while it is being performed.
// promises uses the concept of resolve and reject
function savetodb(data) {
    let internet = Math.floor(Math.random() * 10) + 1;
    return new Promise((resolve,reject)=>{
        if (internet > 4) {
            resolve("Success: your data was saved"); // Pass speed
        } else {
            reject("Failure : Data not saved"); // failure speed
    }})
}
savetodb("I'm Batman")

.then((result)=>{ // result is the value passed to resolve
    console.log(result);
    return savetodb("second data");
})

.then((result)=>{
    console.log(result);
    return savetodb("teesra data");
})

.then((result)=>{
    console.log(result);       // this is called chaining of promises
})

.catch((error)=>{            // error is the value passed to reject
    console.log(error);     // this will catch any error that occurs in the above promises and will not execute the next then() method
});
// this code is more readable and manageable than the callback hell code
// .then() method is used to handle the success of the promise
// .catch() method is used to handle the failure of the promise
