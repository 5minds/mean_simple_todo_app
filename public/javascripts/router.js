'use strict';

var editTemlateUrl = 'partials/tasks/edit.html';

angular.module('simpleToDoApp').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/tasks/index.html',
        controller: 'TaskIndexCtrl'
      }).
      when('/new', {
        templateUrl: 'partials/tasks/new.html',
        controller: 'TaskNewCtrl'
      }).
      when('/edit/:taskId', {
        templateUrl: editTemlateUrl,
        controller: 'TaskEditCtrl'
      });
  }
]);
