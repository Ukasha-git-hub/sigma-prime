
let avgArr = ((arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
});
let arr = [2, 4, 6, 8]
console.log(avgArr(arr));
const isEven = ((n) => {
    if (n % 2 == 0) {
        console.log(" number is even");
    } else {
        console.log(" number is odd");
    }
});
isEven(5);
 
