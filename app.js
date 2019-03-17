import express from "express";

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

app.get("/home", function(req, res){
    res.render("home/home");
});
app.listen("8080", function() {
    console.log("CodeCamp started successfully!!!");
});