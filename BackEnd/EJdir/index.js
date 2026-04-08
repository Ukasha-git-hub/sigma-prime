const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
///ejs it self is library like express we dont need to require it becasue 
/// express enternally call ejs by it self 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/view"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/dicevalue", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("home.ejs", { diceVal });
});
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  // sytax of getting data from data base 
  let instaData = require("./view/data.json")
  const data = instaData[username]
  res.render("insta.ejs", { data });
});
app.listen(port, () => {
  console.log(`listning on port ${port}`);
});