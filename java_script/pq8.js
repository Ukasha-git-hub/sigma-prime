let squareSum = ((arr) => {
    let sum = 0;


    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(arr[i] *= arr[i]);
    }

    let avg = sum / arr.length;
    console.log(` " the total sum of the array is "${sum} "and the avg of the array is  ${avg}`);
    return arr;
});
let arr = [2, 4, 6, 8];
squareSum(arr);
//Q2
let num = [2, 4, 6, 8];
let newArr = num.map((n) => {
    return n + 5;
});
// Q3
console.log(newArr);
let str = "i am m.ukasha";
let change = str
    .split(" ")
    .map(word => word.toUpperCase())
    .join(" ");

console.log(change);
let newStr = "ukasha khursheed";
console.log(...newStr.toLocaleUpperCase());

/// Q4 
function valuesDouble(initialArray, ...arrDouble) {
    const allValues = [...initialArray, ...arrDouble];
    const doubleValues = allValues.map(function (number) {
        return number * 2;
    });
    return doubleValues;
}
const original = [1, 2, 3];
const result = valuesDouble(original, 4, 5, 6);
console.log(original);
console.log(result);
/// Q5
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const a = { name: "Ali", age: 20 };
const b = { city: "Karachi", age: 25 };

const results = merge(a, b);
console.log(results);
