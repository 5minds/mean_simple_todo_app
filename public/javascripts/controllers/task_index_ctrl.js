'use strict';
  
angular.module('simpleToDoApp')
  .controller('TaskIndexCtrl', function($scope, $location, $window, Task, _) {

    $scope.tasks = Task.query();

    $scope.newTask = function() {
      $location.path('/new');
    }

    $scope.editTask = function(task) {
      $location.path('/edit/' + task._id);
    };

    $scope.finishTask = function(task) {

      var doFinish = $window.confirm("Finish task '" + task.title + "'?");

      if (doFinish) {

        $scope.tasks = _.without($scope.tasks, task);

        var finishTask = new Task(task);
        finishTask.done = true;
        finishTask.$update();
      }
    };
  });