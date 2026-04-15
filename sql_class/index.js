const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const { connect } = require("http2");
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
// app.patch("/user/:id", (req, res) => {
//    let id = req.params.id;
//    let q = "SELECT * FROM user WHERE id = ?";
//    let { username: username, password: password } = req.body;
//    try {
//       connection.query(q, [id], (err, result) => {
//          if (err) throw err;
//          let user = result[0];
//          if (password != user.password) {
//             res.send("wrong password");
//          } else {
//             let q2 = `UPDATE user SET username='${username}' WHERE id='${id}'`;
//             connection.query(q2,(err,result)=>{
//                if(err) throw err;
//               res.redirect("/user");
//             })

//          }
//       });

//    }
app.patch("/user/:id", (req, res) => {
   let id = req.params.id;
   let q = "SELECT * FROM user WHERE id = ?";
   let { username, password } = req.body;

   connection.query(q, [id], (err, result) => {
      if (err) return res.send("Database error");

      if (result.length === 0) {
         return res.send("User not found");
      }

      let user = result[0];

      console.log("Entered:", password);
      console.log("DB:", user.password);

      if (password.trim() !== user.password.trim()) {
         return res.send("wrong password");
      }

      let q2 = "UPDATE user SET username = ? WHERE id = ?";
      connection.query(q2, [username, id], (err, result) => {
         if (err) return res.send("Update error");
         console.log(`you have entered this ${username}`);
         res.redirect("/user");
      });
   });
});
//    catch (err) {
//       console.log(err);
//       express.send("some error in data base");
//    }
//    // res.send( "updated" );
// })
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

// INSERTING NEW USER 
app.post('/user/new', (req, res) => {
   let id = Math.floor(Math.random() * 100) + 1;
   let { username, email, password } = req.body;
   let q = `INSERT INTO user(id, username,email,password) VALUES (?, ?, ?, ?)`;
   try {
      connection.query(q, [id, username, email, password], (err, result) => {
         if (err) throw err;
         console.log(`user ${username} added`);
         res.redirect("/user");
      });
   } catch (err) {
      res.send(`somthing is wrong ${err}`);
   }
});
app.get("/user/new", (req, res) => {
   res.render("add.ejs");
});
app.delete("/user/:id", (req, res) => {
   let { id } = req.params;
   let { password } = req.body;
   let q = "SELECT * FROM user WHERE id= ?";
   try {
      connection.query(q, [id], (err, result) => {
         if (err) throw err;
         let user = result[0];
         if (user.password != password) {
            res.send("wrong password");
         } else {
            let q2 = "DELETE FROM user WHERE id=?";
            connection.query(q2, [id], (err, result) => {
               if (err) throw err;
               console.log(result);
               console.log("deleted");
               res.redirect("/user");
            })
         }
      })
   } catch (err) {
      console.log("something went wrong");
   }
});
app.get("/user/:id/delete", (req, res) => {
   let { id } = req.params;
   let q = "SELECT * FROM user WHERE id=?";
   try {
      connection.query(q, [id], (err, result) => {
         if (err) throw err;
         let user = result[0];
         res.render("delete.ejs", { user });
      })
   } catch (err) {
      console.log(err);
   }

});

app.listen(port, () => {
   console.log(`port is listening to ${port}`);
});





