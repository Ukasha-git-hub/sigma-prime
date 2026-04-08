let express = require("express");
let app = express();
// console.dir(app);
let port = 3000;
app.listen(port, () => {
    console.log(`your app is listning on ${port}`);
});
// routingggggggggggggggggggggggggggggggggggggggggggggggg
app.get("/", (req, res) => {
    res.send("Hey  iam a root path a root path");
});
// path parameters to avoid defining every thing in the custom code
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>welcome to the ${username} page</h1>`;
    res.send(htmlStr);
});
app.get("/search", (req, res) => {
    console.log(req.query);
    let { q } = req.query;
    res.send(`<h1>search result for query ${q}</h1>`);
});
app.get("/apple", (req, res) => {
    res.send("you connected to a apple path");
});
app.get("/peach", (req, res) => {
    res.send("you connected a wrong path");
});
//standard respose if the rout does not existttttttttttttttttttttttttttttt
app.use((req, res) => {
    res.status(404).send("this path does not exist");
});
app.post("/", (req, res) => {
    res.send("you sended a post request");
});

// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
//     //     {

//     //     // name:"apple",
//     //     // color:"red",
//     // })
// });
////////////////////////query parameter
