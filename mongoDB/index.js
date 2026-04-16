const mongoose = require("mongoose");
//mongooose.connect('mongodb://127.0.0.1:27017/test');


main().then(() => {
    console.log("connection successfull");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userschema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const user = mongoose.model("user", userschema);

// user.updateMany({ age: { $gt: 20 } }, { age: 25 })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });
// user.findOneAndUpdate({ name: "ali" }, { name: "khalid" },{new:true})
//     .then((res) => {
//         console.log(res);
//     }).then((err) => {
//         console.log(err);
//     });
    user.deleteMany({$and:[{age:{$gte:25}},{name:"khalid"}]})
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
// user.find({}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// user.insertMany([
//     { name: "ali", email: "ali@gmail.com,age:19" },
//     { name: "zaid", email: "zail@gmail.comm", age: 20 },
//     { name: "mahad", email: "mahad@gmail.com", age: 23 }
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// const user2 = new user({
//     name: "ukasha",
//     email: "abcd@gmail.com",
//     age: 23
// });
// user2.save().then((res) => {
//     console.log(res);
// })
//     .catch((err) => {
//         console.log(err);
//     })