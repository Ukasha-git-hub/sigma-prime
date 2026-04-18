const mongoose = require("mongoose");


main().then(() => {
    console.log("connection successful");
}).catch((err) => { console.log(err) });
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 25
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, 'price is too low for this book ']
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String]


});
const Book = mongoose.model("Book", bookSchema);
Book.findByIdAndUpdate('69e1c470be797e2cf2e0afcb', { price: -400 }, { new: true, runValidators: true }).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err.errors.price.properties.message);
})

// let book2 = new Book({
//     name: "Ttomic habittt",
//     author: "STeven o covey",
//     price: 50,
//     category:"fiction",
//     genre:["atomic habit","build daily habit","fiction"]
// });

// book2.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });