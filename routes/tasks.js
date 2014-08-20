var _ = require('underscore');
var express = require('express');
var router = express.Router();

var Task = require('./../models/task');

var debugError = require('debug')('tasks:error');

router.get('/', function(req, res) {
	Task.find().select('_id title note tags done').exec(function(findError, tasks) {

		if (findError) {
			debugError("Cannot find tasks");
			res.json(404, findError);
		} else {
			res.json(tasks);
		}

	});
});

router.get('/:id', function(req, res) {
	Task.findById(req.params.id).select('_id title note tags done').exec(function(findError, task) {
		
		if (findError) {
			debugError('Cannot find task with id "' + req.params.id + '"');
			res.json(404);
		} else {
			res.json(task);
		}
	});
});

router.post('/', function(req, res) {

	var attr = _.pick(req.body, 'title', 'note', 'tags', 'done');

	var task = new Task(attr);

	task.save(function(saveError, task) {
		
		if (saveError) {
			debugError(saveError);
			res.json(422, saveError); // Unprocessable Entity
		} else {
			res.json(201, _.pick(task, '_id', 'title', 'note', 'tags', 'done'));
		}

	});
});

router.put('/:id', function(req, res) {
	var attr = _.pick(req.body, 'title', 'note', 'tags', 'done');

	Task.findByIdAndUpdate(req.params.id, attr).exec(function(updateError, task) {
		
		if (updateError) {
			debugError(updateError);
			req.json(422, updateError); // Unprocessable Entity
		} else {
			res.json(200, _.pick(task, '_id', 'title', 'note', 'tags', 'done'));
		}

	});
});

router.delete('/:id', function(req, res) {
	
	Task.findByIdAndRemove(req.params.id).exec(function(deleteError) {
		if (deleteError) {
			debugError(deleteError);
			res.json(404);
		} else {
			res.json(204); // no content
		}
	});

});

module.exports = router;
