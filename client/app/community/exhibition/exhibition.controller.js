'use strict';

class ExhibitionController {

  constructor ($state) {
    this.$state = $state;
  }

}

angular.module('dogsApp.community')
  .controller('ExhibitionController', ExhibitionController);
