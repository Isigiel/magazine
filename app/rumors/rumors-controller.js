(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name rumors.controller:RumorsCtrl
   *
   * @description
   *
   */
  angular
    .module('rumors')
    .controller('RumorsCtrl', RumorsCtrl);

  function RumorsCtrl() {
    var vm = this;
    vm.ctrlName = 'RumorsCtrl';
  }
}());
