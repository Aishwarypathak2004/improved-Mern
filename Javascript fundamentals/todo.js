let inp=document.querySelector('#inp');
let u=document.querySelector('#u');
let l=document.querySelectorAll("li");
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let task=document.createElement("li");
    task.innerText=inp.value;
    let dlb=document.createElement("button");
    dlb.innerText="Delete";
    dlb.classList.add("delete");
    dlb.style.marginLeft="5px";
    task.appendChild(dlb);
    u.appendChild(task);
    inp.value="";
});
u.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let deleteing=event.target.parentElement;
        deleteing.remove();
    }
});
