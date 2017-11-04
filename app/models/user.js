'use strict';

var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
	username: String,
	universe: [
		{
			id: Number
		}
	],
	contribution: [
		{
			id: Number
		}
	]
});

module.exports = mongoose.model('User', userSchema);