const max = prompt("enter the max number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the number");
while (true) {
    if (guess == "quit") {
        console.log("you quit the game");
        break;

    }

    else if (guess == random) {
        console.log(`"congrats your are right the guess number" ${random}`);
        break;
    }
    else if (guess < random) {
        guess = prompt("your guess is too short please enter the large number");
    }
    else {
        guess = prompt("your guess is too long please enter short number");
    }

}