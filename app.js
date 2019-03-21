var express = require('express');
var bodyParser = require('body-parser');
var connectionString = "mongodb://admin:admin123@ds119996.mlab.com:19996/codecamp";
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine","ejs");

mongoose.connect(connectionString,{useNewUrlParser:true}, function(err,db) {
    if (err)
    {
        console.log("Unable to connect with Mongo, Error: "+err);
    }
    else
    {
        console.log("Connected to MongoDB!!!");
    }
});

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