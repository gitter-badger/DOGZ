'use strict';

angular.module('dogsApp.auth', [
  'dogsApp.constants',
  'dogsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
