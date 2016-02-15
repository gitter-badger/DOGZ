'use strict';

class RescueController {

  constructor ($state) {
    this.$state = $state;
  }

}

angular.module('dogsApp.community')
  .controller('RescueController', RescueController);
