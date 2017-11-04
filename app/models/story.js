'use strict';
var mongoose = require('mongoose');

var storySchema = new mongoose.Schema({
	content: String,
	prevContent: Number,
	comment: String
})