let btn = document.querySelectorAll("button");
let b = document.querySelector("body");
for (let btns of btn) {
    btns.addEventListener("click", () => {
        b.style.backgroundColor = "green"
        console.log("button wass clicked");

    })
}
// let btn = document.querySelectorAll("button");
// let b = document.querySelector("body");

// for (let btns of btn) {
//     btns.addEventListener("click", () => {
//         b.style.backgroundColor = "green";
//         console.log("button was clicked");
//     });
// }