// this is the sequence of the the game explains how game is going ahead
let gameseq=[]; 
// this is the sequence of the the user explains how user is playing ...... shows the sequence of user
let userseq=[];
let btns=["red","green","yellow","blue","pink","purple"];


let started=false; // default state of game utill the key is pressed//
let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keydown",function(){ //..//
    if (started==false){                         //....//
        console.log ("Game started");          //  this whole block starts the game //
        started=true;                          //...//
        levelup();                            // and calls levelup() function//
    }
});

function gameflash(btn){       // this is responsible for flashing of button //
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    } ,550);}
    
function userflash(btn){        // this is responsible for flashing of button //
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } ,250);
    

}

 function levelup(){
 userseq=[];    // this function levels up the level and calls buttonflash function//
    level++;
    h2.innerText=`Level ${level}`;
    // chooses random btn// 
    let randindx= Math.floor(Math.random()*6);
    let randclr=btns[randindx];
    let randbtn = document.querySelector(`.${randclr}`);
    gameseq.push(randclr);
    console.log(gameseq);
    gameflash(randbtn);
 }
 
 function checkans(idx){
    
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelup(), 1000)
        }
    }
    else{
        
        h2.innerHTML=`Game Over ! You reached level ${level} Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 300)
    

        reset();
    }

 }

 function btnpress(){
    let btn=this;
    userflash(btn);
    let usercolor= btn.getAttribute("id") ;
    userseq.push(usercolor);
    checkans(userseq.length-1);
 }
 let allbtns=document.querySelectorAll(".btn");
 for (let btn of allbtns){
    btn.addEventListener("click", btnpress);
}

    function reset() {
        started = false;
        gameseq = [];
        userseq = [];
        level= 0;
        
    }