function getnum(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        let num=Math.floor(Math.random()*10)+1
        console.log(num);
        resolve("got random number")}, 1000)
    })
}
 async function demo() { // async function allows us to use await inside it

   await getnum()   // this will wait for the promise to resolve before moving to the next line
      await getnum()
        await getnum()
          await getnum()
    
 }