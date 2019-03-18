var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", function(req, res) {
    var username = req.body.txtUsername;
    var password = req.body.txtPassword;

    if (username === 'user' && password === 'user')
    {
        res.redirect("/home");
    }
    else
    {
        res.redirect("/login");
    }
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