 const btn= document.querySelectorAll("button")
 for (bt of btn){
    bt.addEventListener("click",()=>{
        btname=bt.innerText
        console.log("Button clicked")
    })
 }