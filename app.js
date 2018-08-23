var express = require("express");
var mongoose = require("mongoose");

var app = express();
app.set("view engine" , "ejs");
app.use(express.static('public'));

app.get("/",function(req,res){
  res.render("login");
});
app.post("/login",function(req,res){
  res.render("main");
});


app.listen(3000,function(){
  console.log("start server");
});
