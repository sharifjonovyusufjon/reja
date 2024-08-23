const express = require("express");
const app = express();
const fs = require("fs");

// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.get("/", function (req, res) {
  console.log("user enter /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log("Err:", err);
        res.end("Qandaydir xatolik kuzatildi!");
      } else {
        res.render("reja", { reja: data });
      }
    });
});

app.post("/reja", (req, res) => {
  console.log("user enter /reja");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/reja-delete", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "succsess" });
    }
  );
});

// Author portfolio
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
