let btn=document.querySelector("button");
let img=document.querySelector("img");
 
btn.addEventListener("click", async () => {
    let dogImage = await getDogImage();
    img.src = dogImage; // Set the image source to the fetched dog image URL

})

let url = "https://dog.ceo/api/breeds/image/random";
async function getDogImage() {
    try{
        let res=await axios.get(url);
        console.log(res.data.message);
        return res.data.message; // Returns the URL of the random dog image
    }
    catch (err) {
        console.log("Error fetching dog image:", err);
    }
}
