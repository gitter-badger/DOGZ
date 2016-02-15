'use strict';

class MissingController {

  constructor ($state) {
    this.$state = $state;
  }

}

angular.module('dogsApp.community')
  .controller('MissingController', MissingController);
