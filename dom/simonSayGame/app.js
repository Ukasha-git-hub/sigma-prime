let gameSeq = [];
let userSeq = [];
let color = ["red", "yellow", "green", "purple"]
let gamSt = false;
let lvl = 0;
let h2 = document.querySelector("h2");
let b = document.querySelector("body");
document.addEventListener("keypress", function () {
    if (gamSt == false) {
        console.log("key was pressed");
        gamSt = true;
        levelUp();
    }
});
// button randomly flash
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}
// lvl upp

function levelUp() {
    userSeq = [];
    lvl++;
    h2.innerText = `level ${lvl}`;
    let random = Math.floor(Math.random() * 3);
    let randcol = color[random];
    let randbtn = document.querySelector(`.${randcol}`);
    // console.log(random);
    gameSeq.push(randcol);
    console.log(gameSeq);
    // console.log(randbtn);
    btnFlash(randbtn);
}
// user flash
function usFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 300);
}
function checkLvl(idx) {
    // console.log("current level is ", lvl);
    // let idx = lvl - 1;

    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);

        }
    } else {
        h2.innerHTML = `game is over! <b>your score is ${lvl}</b> <br> press any key to start the game  `;
        b.style.backgroundColor = "red";
        setTimeout(function () {
            b.style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
// button pressed
function btnPress() {
    // console.log(this);
    let btn = this;
    usFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkLvl(userSeq.length - 1);
}
// button access
let allbtn = document.querySelectorAll(".btn");
for (btns of allbtn) {
    btns.addEventListener("click", btnPress);
}
function reset() {
    gamSt = false;
    gameSeq = [];
    userSeq = [];
    lvl = 0;
}