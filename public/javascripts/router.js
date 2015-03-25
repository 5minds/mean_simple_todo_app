'use strict';

function configEdit(editUrl) {
  //var editTemlateUrl = 'http://localhost:3001/partials/tasks/edit.html';

  angular.module('simpleToDoApp').config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      editUrl
    ]);
  });

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
          templateUrl: editUrl,
          controller: 'TaskEditCtrl'
        });
    }
  ]);

}

configEdit('http://localhost:3001/partials/tasks/edit.html');

