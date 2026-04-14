const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   database: "delta_app",
   password: "ukasha123",

});
function getRandomUser() {
   return [
      Math.floor(Math.random() * 1000000),
      faker.internet.username(),
      faker.internet.email(),
      faker.internet.password(),
   ];
}

// INSERTING NEW DATA;

// let q = "INSERT INTO user(id, username,email, password) VALUES ?";
// let data = [];
// for (let i = 1; i <= 100; i++) {
//    data.push(getRandomUser());
// }
// let users = [[101, "ukasha khursheed", "ukasha@gmail.com", "abc123"],
// [102, "ukasha ", "ukasha961@gmail.com", "xyz123"]
// ];
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/view"));

app.get('/', (req, res) => {
   let q = `SELECT count(*) FROM user`;
   try {
      connection.query(q, (err, result) => {
         if (err) throw err;
         let count = result[0]["count(*)"];
         res.render("home.ejs", { count });

      });
   } catch (err) {
      console.log(err);
      res.send("some error in data base");
   }



});
app.get("/user", (req, res) => {
   let q = `SELECT * FROM user`;
   try {
      connection.query(q, (err, result) => {
         if (err) throw err;

         res.render("showusers.ejs", { result });

      });
   } catch (err) {
      console.log(err);
      res.send("some error in data base");
   }

});
// update DB rout
app.patch("/user/:id", (req, res) => {
   let id = req.params.id;
   let q = "SELECT * FROM user WHERE id = ?";
   let { username: username, password: password } = req.body;
   try {
      connection.query(q, [id], (err, result) => {
         if (err) throw err;
         let user = result[0];
         if (password != user.password) {
            res.send("wrong password");
         } else {
            let q2 = `UPDATE user SET username='${username}' WHERE id='${id}'`;
            connection.query(q2,(err,result)=>{
               if(err) throw err;
              res.redirect("/user");
            })
            
         }
      });

   }
   catch (err) {
      console.log(err);
      express.send("some error in data base");
   }
   // res.send( "updated" );
})
app.get("/user/:id/edit", (req, res) => {
   let id = req.params.id;
   let q = "SELECT * FROM user WHERE id = ?";
   try {
      connection.query(q, [id], (err, result) => {
         if (err) throw err;
         let user = result[0];
         res.render("edit.ejs", { user });

      });
   } catch (err) {
      console.log(err);
      res.send("some error in data base");
   }

});



app.listen(port, () => {
   console.log(`port is listening to ${port}`);
});





