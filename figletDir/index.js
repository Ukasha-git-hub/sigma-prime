// const fliget = require("fliget");
// fliget("ukasha Khursheed", function(err, data){
//     if(err){
//         console.log("something is wrong ");
//         console.dir(err);
//         return ;
//     }
//     console.log(data);

// });

const figlet = require('figlet');

figlet("Ukasha Khursheed", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});