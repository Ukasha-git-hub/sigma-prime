const express = require("express");
const app = express();
const ExpressError = require("./expresserror");

const port = 8080;
// logger 
app.use((req, res, next) => {
    // let { query } = req.query;
    // console.log(query);
    // res.send("this is middleware")
    req.time = Date.now();
    console.log(req.method, req.hostname, req.path, req.time);
    return next();
});
// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("access DEnied");
// })
const checkToken = ("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "access DEnied");
})
app.get("/api", checkToken, (req, res) => {
    res.send("data")
})
app.get("/", (req, res) => {
    res.send("this is root ");
});
app.get("/random", (req, res) => {
    res.send("this is rnadom request ");
});
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access to admin is forbidden");
})
app.get("/err", (req, res) => {
    abcd = abcd;
})
//error handling during middleware
app.use((err, req, res, next) => {
    let { status=500, message="there is some error" } = err;
    res.status(status).send(message);
})
// app.use((req, res) => {
//     res.send("404 page mot found")
// })
app.listen(port, () => {
    console.log(`app is listening to ${port}`);
})