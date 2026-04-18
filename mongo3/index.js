const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./model/chat.js");
const override = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(override("_method"));
main()
    .then(() => {
        console.log("connection success full");
    }).catch((err) => {
        console.log(err)
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
// let chat1 = new chat({
//     from: "ali",
//     to: "zaid",
//     message: "i am running out of money",
//     time: new Date(),
// });
// chat1.save().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });
app.get("/chat", async (req, res) => {
    let chats = await chat.find();
    // console.log(chat);
    res.render("chat.ejs", { chats });
});
app.get("/chat/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/chat", (req, res) => {
    let { from, msg, to } = req.body;
    let newchat = new chat({
        from: from,
        msg: msg,
        to: to,
        time: new Date()
    });

    newchat
        .save()
        .then((result) => {
            console.log("chat was saved");
            res.redirect("/chat");
        }).catch((err) => {
            console.log(err);
        })

});
app.get("/chat/:id/edit", async (req, res) => {
    let { id } = req.params;
    let find = await chat.findById(id);
    res.render("edit.ejs", { find });
})
// update rout
app.put("/chat/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newmsg } = req.body;
    let updatedchat = await chat.findByIdAndUpdate(
        id,
        { msg: newmsg },
        { runValidators: true, new: true }
    );
    console.log(updatedchat);
    res.redirect("/chat");
})
// destroy routes
app.delete("/chat/:id", async (req, res) => {
    let { id } = req.params;
    let deletedchat = await chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chat");
})

app.get("/", (req, res) => {
    res.send("app is working");
})

app.listen(port, () => {
    console.log(`app is listening :${port}`);
})