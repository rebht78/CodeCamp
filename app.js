var express = require("express");

var app = express();
app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.listen("8080", function() {
    console.log("CodeCamp started successfully!!!");
});