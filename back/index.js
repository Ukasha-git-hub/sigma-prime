let express = require("express");
let app = express();
let port = 8080;
// express doesnt know the default data format for that we have to 
// use these to standard lines to parse the data and making data readable for express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/register", (req, res) => {
    let { username, password } = req.query;
    res.send(`welcome ${username}`);
    res.send(`your password is ${password}`);
});
app.post("/register", (req, res) => {
    let { username, password } = req.body;
    res.send(`Standard Post reposnse, welcome ${username}`);
     res.send(`Standard Post reposnse, welcome ${password}`);
});
app.listen(port, () => {
    console.log(`app is listning on ${port}`)
});