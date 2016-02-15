'use strict';

angular.module('dogsApp.community')
  .config(function($stateProvider) {
    $stateProvider
      .state('missing', {
        url: '/community/missing',
        templateUrl: 'app/community/missing/missing.html',
        controller: 'MissingController',
        controllerAs: 'community'
      })
      .state('rescue', {
        url: '/community/rescue',
        templateUrl: 'app/community/rescue/rescue.html',
        controller: 'RescueController',
        controllerAs: 'community'
      })
      .state('breeding', {
        url: '/community/breeding',
        templateUrl: 'app/community/breeding/breeding.html',
        controller: 'BreedingController',
        controllerAs: 'community'
      })
      .state('exhibition', {
        url: '/community/exhibition',
        templateUrl: 'app/community/exhibition/exhibition.html',
        controller: 'ExhibitionController',
        controllerAs: 'community'
      })
      .state('competition', {
        url: '/community/competition',
        templateUrl: 'app/community/competition/competition.html',
        controller: 'CompetitionController',
        controllerAs: 'community'
      });
  });
