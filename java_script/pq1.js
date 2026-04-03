let nums = 15;
if (nums % 10 == 0) {
    console.log("Good");
} else {
    console.log("bad");
}
let name1 = prompt("enter your name");
let age = prompt("enter your age");
console.log(`${name1} "is" ${age} "old"`);
// q3
let quater = 1;
switch (quater) {
    case 1:
        console.log("January,February,March");
        break;
    case 1:
        console.log("april,may,june");
        break;
    case 1:
        console.log("july,august,september");
        break;

    case 4:
        console.log("october,November,December");
        break;
}
//Q4
let str = "alpha";
if ((str[0] == "a" || str[0] == "A") && str.length > 5) {
    console.log("Golden String");
} else {
    console.log("not a golden string");
}
//Q5
let num1 = 5;
let num2 = 10;
let num3 = 15;
if (num1 > num2 && num1 > num3) { console.log(`${num1}"is the larget number "`); }
else if (num1 < num2 && num2 > num3) { console.log(`${num2} "is the larget number`); }
else {
    console.log(`${num3} "is the largest number"`);
}
// Q6
let n1 = 6264;
let n2 = 9324;
if ((num1 % 10) == (n2 % 10)) {
    console.log("true");
}
else {
    console.log("false");
}