//jshint esversion:6

const mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  website:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  comment:{
    type: String,
    required: true
  },
});
// console.log(module.exports.postSchema);
const Post = module.exports = mongoose.model("Post", postSchema);

module.exports.postSchema = postSchema;
