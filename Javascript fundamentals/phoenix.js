// this is how we can change default behaviour of any html element
// let a1=document.getElementById("a1");
// a1.addEventListener('click',function(event){

//     event.preventDefault();
//     a1.textContent="Bete Google me toh tu hi jaavega Dattebayo !!!"

// })
// .
// .
// .

// new topic avoiding too many event listners
//  <!-- Here i want that whicever para i click it should print that you have clicked this para

// let para=document.querySelectorAll('p');
// for(let i=0; i<=para.length;i++){
//     let par=para[i];
//     par.addEventListener('click',function(){
//         alert("You have clicked on para number" + (i+1));
//     })
// } this is working correctly but we are still adding event listners to all of the paragraphs by using for loop ... this is not avoiding adding extra event listners ... then lets do something else 
     
    // Now avoiding extra event listners like a pro

    // let paras=document.querySelectorAll('p');
    // function alertkr(event){
    //     alert("You have clicked on "+ event.target.textContent); target is a method that gives more information about event
    // }
    // for (let i=0;i<=paras.length;i++){
    //     let para=paras[i];
    //     para.addEventListener('click',alertkr);
    // }
    // now lets do this in the easiest way by just applying the event listner on the main div  who contains all the p tags

    // function alertkr(event){
    //     alert("You have clicked " + event.target.textContent);

    // }
    // let d1=document.getElementById("d1");
    // d1.addEventListener("click",alertkr); and this was the easiest way