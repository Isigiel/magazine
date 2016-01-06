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

  function RumorsCtrl($firebaseArray, Ref, $log) {
    var vm = this;
    vm.all = $firebaseArray(Ref.child('rumors'));
    vm.ctrlName = 'RumorsCtrl';
  }
}());
