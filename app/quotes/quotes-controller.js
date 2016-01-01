(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name quotes.controller:QuotesCtrl
   *
   * @description
   *
   */
  angular
    .module('quotes')
    .controller('QuotesCtrl', QuotesCtrl);

  function QuotesCtrl() {
    var vm = this;
    vm.ctrlName = 'QuotesCtrl';
  }
}());
