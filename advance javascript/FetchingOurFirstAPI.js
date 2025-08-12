// let url ="https://catfact.ninja/facts";
// fetch(url)
// .then((res)=>{
//    return res.json();
//     })

//     .then((data)=>{

//         console.log(data.data[1].fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//    return res.json();
//     })

//     .then((data2)=>{

//         console.log(data2.data[2].fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//    return res.json();
//     })

//     .then((data3)=>{

//         console.log(data3.data[3].fact);
//     })

   

//  .catch((err)=>{
//     console.log("Error fetching data:", err);

   // });
    // This code fetches data from the Cat Facts API and logs it to the console.
// 🐱 This code fetches random cat facts from an API using chained Promises.
// 🌐 It makes 3 sequential fetch requests to the same URL (nested .then chains).
// 📚 Teaches: 
//    - How to use fetch() to make HTTP requests.
//    - How to parse JSON from a response.
//    - How to chain multiple Promises sequentially.
//    - Basic usage of arrays in API response (data.data[index].fact).
// 🔄 Purpose: Logs different cat facts one after another from 3 fetch calls.
// 💡 Tip: Ideal for learning promise chaining and working with APIs.


// This code demonstrates how to use async and await in api calls to make the code more readable and manageable.

// let url ="https://catfact.ninja/facts";
// async function getfacts() {
//     try {
//     let res1 = await fetch(url);
//     let data1= await res1.json();
//     console.log(data1.data[0].fact);

//     let res2 = await fetch(url);
//     let data2= await res2.json();
//     console.log(data2.data[1].fact);

//     let res3 = await fetch(url);
//     let data3= await res3.json();
//     console.log(data3.data[2].fact);

//     let res4 = await fetch(url);
//     let data4= await res4.json();
//     console.log(data4.data[3].fact);

// }
//     catch (err) {
//         console.log("Error fetching data:", err);
//     }
// }





// now we will use axios to fetch the data because it automatically converts the response to json and also handles errors more gracefully
let btn= document.querySelector("button");
let last= document.querySelector("h2");
btn.addEventListener("click", async ()=>{
     let jokes= await getjokes();
     last.innerText=jokes;
    });
let url = "https://v2.jokeapi.dev/joke/Any";

async function getjokes() {
    try {
        let res = await axios.get(url);
        if (res.data.type === "single") {
            console.log("Single Joke:", res.data.joke);
            return res.data.joke
        } else if (res.data.type === "twopart") {
            console.log("Two-part Joke:");
            console.log("Setup:", res.data.setup);
            console.log("Delivery:", res.data.delivery);
            return `${res.data.setup} - ${res.data.delivery}`;
        }
    } catch (err) {
        console.log("Error fetching data:", err);
    }
}

// 🐱 This code fetches random cat facts from the Cat Facts API using async/await and axios.
// 🔁 It makes 4 separate HTTP GET requests to the same URL and logs different facts each time.
// 🔍 API Response Structure:
//     axios.get(url) returns an object with:
//     res.data = {
//         data: [ { fact: "cat fact 1" }, { fact: "cat fact 2" }, ... ]
//     }
// ❗ Bug Alert:
//     res1.data[0].fact ❌ is incorrect – should be res1.data.data[0].fact ✅
// 📚 Concepts Demonstrated:
//     - async/await syntax for cleaner asynchronous code
//     - axios for simplified HTTP requests (auto-parses JSON)
//     - try...catch for graceful error handling
//     - Working with nested JSON response objects
