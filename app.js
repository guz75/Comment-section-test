// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.get("/", function(req, res){
  res.render("main");
});

app.post("/", function(req, res) {
  console.log(req.body.fullName);
});

app.listen(3000, function(){
  console.log("Server connected on port 3000");
});
