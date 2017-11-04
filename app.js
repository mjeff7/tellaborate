var express	= require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyparser = require('body-parser');
var User = require('./app/models/user.js'),
	Story = require('./app/models/story');
// require('./seed.js')();

mongoose.connect("mongodb://localhost/hack");
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));


app.get('/', function(req,res){
	res.redirect('/landing');
});
// LANDING PAGE
app.get('/landing', function(req, res){
	res.send("main page");
})

// LOGIN PAGE
app.get('/login', function(req, res){
	res.render('login');
});

app.post('/', function(req, res){
	User.findOne({'username': req.body.username}, function(err, foundUser){
		if(err){
			console.log(err);
			res.redirect('/login');
		}
		console.log("test",foundUser);
		if(foundUser){
			console.log(foundUser);
			res.redirect('profile')
		} else {
		var newUser = new User();
		newUser.username = req.body.username;
		newUser.save();
		res.redirect('/profile');
		}

	})
})

// PROFILE PAGE
app.get('/profile', function(req, res){
	Story.find({}, function(err, stories){
		// console.log(stories)
		if(err){
			console.log("ERRORerr");
			res.redirect('/')
		} else {
			console.log("stories found");
			// console.log(stories[0])
			res.render('profile', {stories});
		}
	})
});

// API PROFILE PAGE
app.get('/api/profile', function(req, res) {
  Story.find({}, function(err, stories) {
    if (err) {
      console.log('ERRORerr');
      res.redirect('/');
    } else {
      res.json({ stories });
    }
  });
});

// API STORIES PAGE
app.get('/api/stories/:id', function(req, res){

	Story.findById(req.params.id, function(err,stories) {
		console.log(stories)
		if(err){
			console.log(err)
			res.redirect('/')
		} else {
			res.json({stories})
		}
	})
});

// STORY PAGE
app.get('/story/:id', function(req, res){
	res.render('story');
});

app.post('/story', function(req, res){
	// DO SOMETHING SAVE STORY
	 // POST /story : Accepts JSON body with:
  //   - id: ID of previous story (or null if this is the first story)
  //   - content: Text string containing the story thus far.
  //   - comment: Text string that is a comment for the story going forward.
  // then creates a story with that info and returns JSON of the new story ID.
})

// STORY EXTENSION
app.get('/storyExtension/:id', function(req, res){
	res.send("STORY PAGE");
});

app.put('/accept', function(req, res){
	// - PUT /accept: Accepts JSON body with { id: ID of story extention to accept } 
	// then updates the universe HEAD id at the root of the story to that ID.
})
// API
app.get('/api', function(req, res){
	res.send("API page");
});

var port = 8080 || process.env.PORT;
// SERVER CONFIG to PORT
app.listen(port, function(){
	console.log("Server has connected to port:",port)
})
