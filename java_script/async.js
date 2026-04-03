// async function greet() {
//     throw ("check your connecting it 404");
//     console.log("hello world");
// }
// greet()
//     .then(() => {
//         console.log("page was loaded succesfully");
//     })
//     .catch(() => {
//         console.log("page not found")

// const { reject } = require("async");

//const { reject } = require("async");

//     })
// function getnum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function demo() {
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
// }
// demo();
let h1 = document.querySelector("h1");
// change color with the help of async
function color(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num < 3) {
                reject("promise was rejected");
            }
            h1.style.color = color;
            console.log(`color changed to : ${color}`);
            resolve("color chnaged")
        }, delay);
    });
}
async function dem() {
    // using try and catch to prevent carsh of code of remaining part
    // we put the suspected code (in which we think that it could going to give an erorr) inside the try {}
    try {
        await color("red", 1000);
        await color("yellow", 1000);
        await color("green", 1000);
        await color("blue", 1000);
        await color("pink", 1000);
    } catch (error) {
        console.log(`erorr ${error}`);
    }
    let a = 10;
    let random = "text after the try and catch to avoid and erorr";
    console.log(random + a);

}
dem();