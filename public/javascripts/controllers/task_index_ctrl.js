'use strict';
	
angular.module('simpleToDoApp')
	.controller('TaskIndexCtrl', function($scope, $location, Task, _) {

		$scope.tasks = Task.query();

		$scope.newTask = function() {
			$location.path('/new');
		}

		$scope.editTask = function(task) {
			$location.path('/edit/' + task._id);
		};

		$scope.deleteTask = function(task) {
			$scope.tasks = _.without($scope.tasks, task);

			var deleteTask = new Task(task);
			deleteTask.$remove();
		};
	});