'use strict';

var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	note: {
		type: String
	},
	tags: {
		type: [String],
		index: true
	},
	done: {
		type: Boolean,
		default: false
	},
});

// Task.findOpen(function (err, tasks) {})
TaskSchema.statics.findOpen = function(callback) {
	var query = this.find({});
	query = query.where('done').ne(true);

	query.exec(callback);
};

module.exports = mongoose.model('Task', TaskSchema);
