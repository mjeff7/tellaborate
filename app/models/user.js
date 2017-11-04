'use strict';

var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
	username: String,
	universe: [Number],
	contribution: [Number]
});

module.exports = mongoose.model('User', userSchema);