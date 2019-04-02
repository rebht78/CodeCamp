var express = require('express');
var bodyParser = require('body-parser');
var connectionString = "mongodb://admin:admin123@ds119996.mlab.com:19996/codecamp";
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.json());
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

var UserSchema = new mongoose.Schema({
    username:String,
    password:String
});

var User = mongoose.model("User",UserSchema);

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", function(req, res) {
    let username = req.body.Username;
    let password = req.body.Password;

    if (username == 'user' && password == 'user')
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

app.post("/register", function(req, res) {
    var newUser = new User({
        username:req.body.Username,
        password:req.body.Password
    });
    console.log("Username in register: "+req.body.Username);
    newUser.save(function(err,user){
        if (err) {
            res.render("ajax",{process:"checkreg","rownum":0});
        }
        else
        {
            res.render("ajax",{process:"checkreg","rownum":1});
        }
    });

});
app.get("/home", function(req, res){
    res.render("home/home");
});
app.listen("8080", function() {
    console.log("CodeCamp started successfully!!!");
});