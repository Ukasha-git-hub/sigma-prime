// let num = prompt("enter number")
// let dice = prompt(Math.floor(Math.random() * num) + 1);
// console.log(dice);
// let car = {
//     n: "civic",
//     model: 2020,
//     color: "white"
// };
// console.log(car);
let person = {
    namee: "ukasha",
    age: 25,
    city: "LA",
}
// person.city = "newYork";
person.country = "united states";
console.log(person);
  // heigher order function 
  function oddEvenTest(request){
    if(request =="odd"){
        return function(n){
            console.log(!(n%2 ==0));
        }
    }else if(request == "even"){
        return function(n){
            console.log(n%2 ==0);
        }
    }else {
        console.log("wrong request");
    }
  }
  