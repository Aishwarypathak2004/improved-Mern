const figlet = require('figlet');
figlet("Haan Lund aa riyaa majaa", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});