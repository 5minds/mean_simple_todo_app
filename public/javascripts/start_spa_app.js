'use strict';

var simpleToDoApp = angular.module('simpleToDoApp', [
  'ngRoute',
  'ngResource',
  'underscore'
  ]);

//simpleToDoApp.constant('AppConfig', {API_HOST: 'http://192.168.178.21:3000/'});
simpleToDoApp.constant('AppConfig', {API_HOST: 'http://localhost:3000/'});
