// // let smallImgs = document.getElementsByClassName("oldImg");
// // for (let i = 0; i < smallImgs.length; i++) {
// //     console.dir(smallImgs[i].src="assets/spiderman_img.png");
// //     console.log(`value of img no ${i} has been changed`);
// // }
// // query selector
// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg "));
// console.dir(document.querySelectorAll("div a"));
// console.dir(document.querySelectorAll("p"));
// // differences between inner text, text document , inner html;
// let heading = document.querySelector("h1");
// let img = document.querySelector("img");
// img.getAttribute('id');
// img.setAttribute ('id','spiderImg');

// let links = document.querySelectorAll(".box a");
// for (link of links) {
//     link.style.color = "purple";
// }
// practice questionnnn  

// let para1 = document.createElement('p');
// para1.innerText = "Hey' i am red";
// document.querySelector("body").append(para1);
// para1.classList.add('red');

// let heading = document.createElement('h3');
// heading.innerText= "hey i am blue";
// document.querySelector('body').append(heading);
// heading.classList.add('blue');
// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para = document.createElement('p');
// h1.innerText = "hey i am h1";
// para.innerText = "hey i am new paragraphe";

// div.append(h1);
// div.append(para);
// document.querySelector('body').append(div);
// div.classList.add('div');

// // Assignment
// let input = document.createElement('input');
// let b= document.createElement('button');
// b.innerText = "click me ";
// document.querySelector('body').append(input);
// document.querySelector('body').append(b);
// b.setAttribute('id', 'btn');
// input.setAttribute('placeholder','username');
// btn.classList.add('btn');


// let h = document.createElement("h1");
// h.innerText = "DOM PRACTICE";
// document.querySelector('body').prepend(h);
// h.classList.add('h');
//   // last question


//   let pa = document.createElement('p');
//   pa.innerText= 'APNA COLLEGE <b>SIGMA </b> PRACTICE';  
//   document.querySelector('body').append(pa);
//   pa.classList.add('pa');
// DOM Event 
// let btns= document.querySelectorAll('button');
// for( btn of btns){
//   // btn.onclick = sayhello;
//   // btn.onclick = sayName;
//   // btn.onmouseenter=function (){
//   //   console.log('you have entered the mouse');
//   // }
//   btn.addEventListener('click', sayhello);
//   btn.addEventListener('click', sayName);
// }
// function sayhello(){
//    alert ('hello');
// }
// function sayName(){
//  alert('some is clicked this button');
// }

// thissssssssssssssssssssssss in event listener
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let par = document.querySelector('p');
// let btn = document.querySelector('button');
// function change() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "red";

// } 0
// h1.addEventListener('click', change);
// h3.addEventListener('click', change);
// par.addEventListener('click', change);
// btn.addEventListener('click', change);
// // keyboard event
// let inp = document.querySelector('input');
// inp.addEventListener("keydown", function (eve) {
//   console.log('key =', eve.key);
//   if (eve.code == "keyU") {
//     console.log("char move forward");
//   } else if (eve.code == 'keyD') {
//     console.log("char move Downward");
//   }
//   else if (eve.code == 'keyR') {
//     console.log("char move righ");
//   } else if (eve.code == 'keyL') {
//     console.log("char move Left");
//   }
//   // console.log('keyCode =', eve.code);
//   // console.log('Code =', eve.keyCode);
//   //   console.log('key was pressed');
//   //   console.dir(eve);

// });
// let form= document.querySelector("form");
// form.addEventListener("submit", function(eve){
//   eve.preventDefault();
//   let user=this.elements[0];
//   let pass = this.elements[1];
//   // let na= document.querySelector("name");
//   // let pas= document.querySelector("pass");
//   console.log(user.value);
//   console.log(pass.value);
//   alert(`hey ${user.value} your password is ${pass.value}`);
// });
// making custom text editor

//let inp= document.querySelector("input");
// let p = document.querySelector("p");
// inp.addEventListener("input", function (){
//   console.log(inp.value);
//   p.innerText=inp.value;
// });
let btn = document.querySelector("button");
let p = document.querySelector("p");
btn.addEventListener("mouseout", function () {
  btn.style.backgroundColor = "red";
});
btn.addEventListener("mouseover", function () {
  btn.style.backgroundColor = "blue";
});
btn.addEventListener("click", function () {
  btn.style.backgroundColor = "green";
  console.log("button wass clikced by the external source ");
});
btn.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    btn.style.marginLeft = "10px";
  }
});
btn.addEventListener("keydown", function (eve) {
  if (eve.key === "keyDown") {
    btn.style.marginTop = "500px";
    console.log("button was shift down word");
  }
});
let b = document.querySelector("body");
window.addEventListener("scroll", function () {
  document.body.style.backgroundColor = "red";
  console.log("someomne is on the screen");
});