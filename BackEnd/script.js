// // let n =10;
// // for(let i =0; i<n; i++){
// //     console.log("hello",i);
// // }
// // console.log("node js is run time environment that runs js code  by just running node command with the file name which we suppose to run and make sure we have to be in the  directory ");
//////// prcess.argvvvvvvvvvvvvvvvv

// let arg = process.argv;
// for(let i =0 ; i<arg.length; i++){
//     console.log("hello to :", arg[i] );
// }
// accessing other file nu using requires and then adding the path of that perticular file 
// let math = require("./math");
// console.log(math.sum(1 ,7));
// console.log(math.mul(5 , 7));
// console.log(math.PI);
// console.log(math.g);
/// accessing via direactory

// let apple = require("./apple");
// let orange = require("./orange ");
// let banana = require("./banana");
// let fruites =[apple, banana, orange ];
// module.exports= fruites;


// let fru = require("./fruits");
// console.log(fru);
//////////////////////////////using import export method
import { sum } from "./math.js";
import { generate } from "random-words";
console.log(generate());
console.log(sum(184, 8448));