const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./model/chat.js");
const override = require("method-override");
const ExpressError = require("./expressError");

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
    try {
        let chats = await chat.find();
        // console.log(chat);
        res.render("chat.ejs", { chats });
    } catch (err) {
        next(err);
    }
});
app.get("/chat/new", (req, res) => {
    throw new ExpressError(404, "page not found ");
    res.render("new.ejs");
});
app.post("/chat", async (req, res) => {
    let { from, msg, to } = await req.body;
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
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    }

}
// show rout
app.get("/chat/:id", asyncWrap(async (req, res, next) => {

    let { id } = req.params;
    let Chat = await chat.findById(id);
    if (!Chat) {
        next(new ExpressError(404, "chat not found"));
    }
    res.render("show.ejs", { Chat });

}
));
app.get("/chat/:id/edit", asyncWrap(async (req, res) => {

    let { id } = req.params;
    let find = await chat.findById(id);

    res.render("edit.ejs", { find });
}


))
// update rout
app.put("/chat/:id", asyncWrap(async (req, res) => {

    let { id } = req.params;
    let { msg: newmsg } = req.body;
    let updatedchat = await chat.findByIdAndUpdate(
        id,
        { msg: newmsg },
        { runValidators: true, new: true }
    );
    console.log(updatedchat);
    res.redirect("/chat");

}))
// destroy routes
app.delete("/chat/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let deletedchat = await chat.findByIdAndDelete(id);
        console.log(deletedchat);
        res.redirect("/chat");
    } catch (err) {
        next(err);
    }
})

app.get("/", (req, res) => {
    res.send("app is working");
});
// handling validation error 
const handleValidationError = (err) => {
    console.log("this is the validation error please follow the rule ");
    console.dir(err.message);
    return err;

}
// getting error by name
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") {
        err = handleValidationError(err)
    }
})
//erro handling middelware
app.use((err, req, res, next) => {
    let { status = 500, message = "some error" } = err;
    res.status(status).send(message);
})

app.listen(port, () => {
    console.log(`app is listening :${port}`);
})