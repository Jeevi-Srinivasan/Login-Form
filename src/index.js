const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");
const tempelatepath = path.join(__dirname, "../tempelates");

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", tempelatepath);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  // const data = {
  //   name: req.body.name,
  //   password: req.body.password,
  // };
  await collection.insertMany([req.body]);

  res.render("home");
});

app.listen(3000, () => {
  console.log("Server Connected");
});
