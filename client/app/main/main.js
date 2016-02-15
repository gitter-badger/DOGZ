'use strict';

angular.module('dogsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('terms', {
        url: '/terms',
        templateUrl: 'app/main/terms.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('privacy', {
        url: '/privacy',
        templateUrl: 'app/main/privacy.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
