const express = require("express");
const app = express();
const port = 8080;
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

// express cant understand all data that added by users 
// and it can not parse data so to explain user data to express or server we have to parse data and we use this 
app.use(express.urlencoded({ extended: true }));
// to use overide method 
app.use(methodOverride("_method"));
// to use public and view folder we have to require their path for that we are using 
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, "public")));
let posts = [
    {
        id: uuidv4(),
        name: "ukasha",
        userage: "25",
        usercontent: "non",
    },
    {
        id: uuidv4(),
        name: "ali",
        userage: "25",
        usercontent: "Gaming",
    },
    {
        id: uuidv4(),
        name: "hamza",
        userage: "23",
        usercontent: "bbc",
    },
];

app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
// creating new post 
app.post('/posts', (req, res) => {
    let id = uuidv4();
    let { name, userage, usercontent } = req.body;
    posts.push({ id, name, userage, usercontent });
    res.redirect("/posts");
});
/// getting request by id  
app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        return res.send("post not found");
    }
    res.render("show.ejs", { post });
    // res.send("post is working");
});
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newcontent = req.body.usercontent;
    let post = posts.find((p) => id === p.id);
    post.usercontent = newcontent;
    console.log(post);
    res.redirect("/posts");
});
// app.get("/posts/:id/edit", (req, res) => {
//     let { id } = req.params;
//     let post = posts.find((p) => id === p.id);
//     res.render("edit.ejs", { post });
// })
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;

    console.log("ID:", id); // 👈 check this

    let post = posts.find((p) => id === p.id);

    console.log("FOUND POST:", post); // 👈 check this

    res.render("edit.ejs", { post });
});
app.delete("/posts/:id", (req, res) => {
    // extracting id 
    let { id } = req.params;
    // extracting post by id no.
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})
app.listen(port, () => {
    console.log(`listening to port  ${port}`);
})