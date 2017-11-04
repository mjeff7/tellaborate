var express	= require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyparser = require('body-parser');
var User = require('./app/models/user.js');

mongoose.connect("mongodb://localhost/hack");
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

// LANDING PAGE
app.get('/', function(req, res){
	res.send("main page");
})

// LOGIN PAGE
app.get('/login', function(req, res){
	res.render('login');
});

app.post('/', function(req, res){
	User.findById(req.body.id, function(err, foundUser){
		if(err){
			console.log(err);
			res.redirect('/login');
		}
		if(user){
			res.redirect('profile')
		}
		var newUser = new User();
		newUser.username = req.body.username;
		newUser.save();
		res.redirect('/profile');
	})
})

// PROFILE PAGE
app.get('/profile', function(req, res){
	res.render('profile');
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