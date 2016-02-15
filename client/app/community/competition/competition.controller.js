'use strict';

class CompetitionController {

  constructor ($state) {
    this.$state = $state;
  }

}

angular.module('dogsApp.community')
  .controller('CompetitionController', CompetitionController);
