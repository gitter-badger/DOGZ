'use strict';

class BreedingController {

  constructor ($state) {
    this.$state = $state;
  }

}

angular.module('dogsApp.community')
  .controller('BreedingController', BreedingController);
