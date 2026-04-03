// let btn = document.querySelector('button');
// btn.addEventListener('click' , function(){
//     let h3 = document.querySelector('h3');
//     let random = getRandomColor();
//     h3.innerText = random;

//     let di = document.querySelector("#box");
//     di.style.backgroundColor=random;
//     di.style.border = random;
//     console.log(di);

//     console.log('color is updated');

// });

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random()* 255);
//     let green = Math.floor(Math.random()* 255);
//     let color =`rgb(${red},${green}, ${blue})`;
//     return color;
// }

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let del = document.createElement("button");
    del.innerText = "delet";
    del.classList.add("delete");
    item.appendChild(del);
    ul.appendChild(item);
    inp.value = "";
    // del.addEventListener("click", function () {
    //     item.remove();
    // })
})
// let deletBtn = document.querySelectorAll(".delete");
// for (bt of deletBtn) {
//     bt.addEventListener("click", function () {
//         btn.remove();
//         console.log("item was deleted");
//     });
// }