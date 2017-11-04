'use strict';
var mongoose = require('mongoose');

var storySchema = new mongoose.Schema({
  // creator: {type: Schema.Types.ObjectId, ref: 'User'},
  _id: Number,
  title: String,
  content: String,
  prevContent: Number,
  comment: String,
});

module.exports = mongoose.model('Story', storySchema);
