'use strict';

var simpleToDoApp = angular.module('simpleToDoApp', [
  'ngRoute',
  'ngResource',
  'underscore'
  ]);

//simpleToDoApp.constant('AppConfig', {API_HOST: 'http://moellenbeck-t.tunnlr.com//'});
//simpleToDoApp.constant('AppConfig', {API_HOST: 'http://localhost:3000/'});
simpleToDoApp.constant('AppConfig', {API_HOST: 'http://www.mindassist.net:8080/'});
