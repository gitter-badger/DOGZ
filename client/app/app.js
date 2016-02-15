'use strict';

angular.module('dogsApp', [
  'dogsApp.auth',
  'dogsApp.admin',
  'dogsApp.community',
  'dogsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
