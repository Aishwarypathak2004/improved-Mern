let url="http://universities.hipolabs.com/search?name=india";
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let state= document.querySelector("input").value;
    let clgarr= await getUniversities();
     let filtered = clgarr.filter(col => {
        return col["state-province"] && col["state-province"].toLowerCase() === state  } )
     show(filtered);}

)
function show(clgarr) {
    let list = document.querySelector("#list");
    list.innerHTML = ""; // Clear the previous list 

    for (col of clgarr) {
        console.log(col.name);
        let li= document.createElement("li");
        li.innerText = `${col.name} (${col["state-province"]})`; // Display the name of the university
        list.appendChild(li); // Append the list item to the unordered list
    }



}

async function getUniversities() {
    try{
        let res=await axios.get(url);
        console.log(res.data);
        
        return res.data; // Returns the list of universities in the specified country

    }
    catch (err) {
        console.log("Error fetching universities:", err);
        return []; // Return an empty array in case of error
    }
}