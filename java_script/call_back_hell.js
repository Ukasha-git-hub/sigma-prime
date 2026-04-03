// let h1 = document.querySelector("h1");
// function chnageColor(color, delay, callBack){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(callBack)callBack();

//     },delay);
// }
// callBack("red", 1000, ()=>{
//     callBack("red", 1000, ()=>{
//         callBack("orange",1000,() =>{
//             callBack("yellow",1000);
//         })
//     })
// })
// promises
// function saveDb(data, success, failure) {
//     let internet = Math.floor(Math.random() * 10) + 1;
//     if (internet > 5) {
//         success();
//     } else {
//         failure();
//     }
// }

// same function with the help of promise chaining
let h1 = document.querySelector("h1");
function chnageColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    })
}
chnageColor("red", 1000)
    .then(() => {
        console.log("color changed");
        return chnageColor("orange", 1000);
    }).then(() => {
        console.log("orange is also chnaged");
        return chnageColor("yellow", 1000);
    }).then(() => {
        console.log("this is the final color");
    })

// saveDb("consistency will definetly drag you where you want to be ",
//     () => {
//         console.log(`your data was saved `);
//         saveDb("hello world ", () => {
//             console.log("new 2nd data is been saved");
//             saveDb("new Data", () => {
//                 console.log("your 3rd data has been saved");
//             }, () => {
//                 console.log("your 3rd data is not save due to low connection");
//             })
//         }, () => {
//             console.log("connection is weak for this data ");
//         })
//     },
//     () => {
//         console.log("your connection is too weak check your internet");
//     });
// prmises try and catch mathod
// function saveDb(data) {
//     return new Promise((resolve, reject) => {
//         let internet = Math.floor(Math.random() * 10) + 1;
//         if (internet > 5) {
//             resolve("data saved successfully");
//         } else {
//             reject("failure its 404");
//         }
//     });

// }

// saveDb("promises data with try() and catch () mathod")
//     .then((result) => {
//         console.log("reques of data accepted");
//         console.log(result);
//         return saveDb("promises chaining");
//     }).then((result) => {
//         console.log("data2 was saved");
//         console.log(result);
//         return saveDb(" call for 3rd db function");
//     }).then((result) => {
//         console.log("3rd data is saved");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("request rejected its 404");
//         console.log(error);
//     })