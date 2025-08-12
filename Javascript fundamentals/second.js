let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    let randcolor= getrandcolor();
    let h3=document.getElementById("hc");
    h3.textContent=randcolor;
    let d1=document.getElementById("d1");
    d1.style.backgroundColor= randcolor;
})
function getrandcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`
    return color;
}