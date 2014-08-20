
'use strict';

angular.module('simpleToDoApp').factory('Task', function($resource) {
	return $resource('/tasks/:id', 
					{id: '@_id'},
					{'update': { 'method': 'PUT'}}
		);
});