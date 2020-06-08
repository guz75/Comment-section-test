//jshint esversion:6

const mongoose = require("mongoose");
const postSchema = require("./posts");

const Preview = module.exports = mongoose.model("Preview", postSchema.postSchema);
