'use strict';
var Story = require('./app/models/story');


module.exports = function(){

	var story1 = new Story;
	story1.title = "TITLE"
	story1.content = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
	story1.comment = "This is awesome";
	story1.save();
	// var story2 = new Story;
	// universe1.content = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
	// universe1.comment = "This is awesome";
	// prevContent = 
}



// var storySchema = new mongoose.Schema({
// 	author
// 	content: String,
// 	prevContent: Number,
// 	comment: String
// })