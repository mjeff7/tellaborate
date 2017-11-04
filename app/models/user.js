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