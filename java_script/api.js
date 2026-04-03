// let btn = document.querySelector("button");

// let im = document.querySelector("img");
// btn.addEventListener("click", async () => {
//     let link = await getFact();
//     im.setAttribute("src", link);
//     console.log(link);

// })

// // let Caturl = "https://catfact.ninja/fact";
// let dogUrl = "https://dog.ceo/api/breeds/image/random";

// let validRes = JSON.parse(respose);
// console.log(validRes);
// let res = "https://icanhazdadjoke.com/";
// async function getfacts(){
// fetch(res)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.fact);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
// axios
// async function getFact() {
//     try {
//         let res = await axios.get(dogUrl);
//         return res.data.message;
//         // return res.data.fact;
//     }
//     catch (err) {
//         console.log('error', err);
//         return "no facts";
//     }
// }
// /////////////////////////////////////////////////sending headers with api request 
// let jokeUrl = "https://icanhazdadjoke.com/";


// async function getJoke() {
//     try {
//         const config = { headers: {accept: "application/jason" } };
//         let res = await axios.get(jokeUrl, config);
//         console.log(res.data);
//     } catch (e) {
//         console.log("joke not available", e);
//     }
// }
//////////////////////////////////////////// using university api "activity of using Query String"


let uni = "http://universities.hipolabs.com/search?name&state-province=";
//let n = "pakistan";
let btn = document.querySelector("#res");
btn.addEventListener("click", async () => {
    let cont = document.querySelector("input").value;
    console.log(cont);

    let collArr = await getU(cont);
    show(collArr);

})
let ul = document.querySelector("#list");
function show(collArr) {
    for (col of collArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
        console.log(col.name);
    }
}
async function getU(country) {
    try {
        let res = await axios.get(uni + country);
        return res.data;
    }
    catch (e) {
        console.log("university not found", e);
    }
}
