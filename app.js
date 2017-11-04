var express	= require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyparser = require('body-parser');

mongoose.connect("mongodb://localhost/hack");
app.set('view engine', 'ejs');

// LANDING PAGE
app.get('/', function(req, res){
	res.send("main page");
})

// LOGIN PAGE
app.get('/login', function(req, res){
	res.send("LOGIN");
});

// PROFILE PAGE
app.get('/profile', function(req, res){
	res.send("PROFILE PAGE");
});

// STORY PAGE
app.get('/story/:id', function(req, res){
	res.send("STORY PAGE");
});

var port = 8080 || process.env.PORT;
// SERVER CONFIG to PORT
app.listen(port, function(){
	console.log("Server has connected to port:",port)
})