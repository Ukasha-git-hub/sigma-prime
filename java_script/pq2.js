let arr = [3, 7, 10, 2, 15];
let ans = [];
function num(n, arr, ans) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(num(7, arr, ans));




let str = "abcdabcdefgggh";
let newstr = "";
function uniqueStr(str, newstr) {
    for (let i = 0; i < str.length; i++) {
        if (!(newstr.includes(str[i]))) {
            newstr += str[i];
        }
    }
    return newstr;
}
console.log(uniqueStr(str, newstr));

let country = ["Australia", "Germany", "United states of America "];
function largCount(country) {
    for (let i = 0; i < country.length; i++) {
        if (country[0].length > country[1].length && country[0].length > country[2].length) {
            console.log(country[0]);
        } else if (country[0].length < country[1].length && country[1].length > country[2].length) {
            console.log(country[1]);
        } else {
            console.log(country[2]);
        }
    }
    return country;
}
largCount(country);