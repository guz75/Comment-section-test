// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost/commentsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const postSchema = new mongoose.Schema({
  name: String,
  email: String,
  website: String,
  title: String,
  comment: String
});

const Post = mongoose.model("Posts", postSchema);
const Preview = mongoose.model("Preview", postSchema);

app.get("/", function(req, res){
  Post.find({}, function(err, posts){
    if(!err){
      res.render("main", {posts: posts});
    }
  });

});

app.post("/", function(req, res) {
  const post = new Preview({
    name: req.body.name,
    email:req.body.email,
    website: req.body.website,
    title: req.body.title,
    comment: req.body.comment
  });
  post.save(function(err){
    if(!err){
      res.redirect("/preview");
    }
  });
});

app.get("/preview", function(req, res){
  Preview.find({}, function(err, posts){
    if(!err){
      res.render("preview", {posts: posts});
    }
  });
});

app.listen(3000, function(){
  console.log("Server connected on port 3000");
});
