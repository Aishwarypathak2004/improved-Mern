const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'USER_DATA',
    password: '@yash123'
});
let q="INSERT INTO AVENGERS(Name,Powerlevel,aveng_Id,Experience) Values ?";
let avenger=[["BLACK WIDOW","10","NATASHA","15"],
["Thor","102","POINT_BREAK","1500"],
["IRONMAN","80","Genius_billionaire","10"],
["CAPTIAN AMERICA","81","A_BRAVE_SOLDIER","70"]]
connection.query(q,[avenger],(err,result)=>{
    try{
        if (err) throw err;
        console.log(result);
    } catch(err){
        console.log(err);
    }
});
connection.end();
let getRandomUser= ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
   
  };
}
console.log(getRandomUser());
