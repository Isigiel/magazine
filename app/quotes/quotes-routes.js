(function () {
  'use strict';

  angular
    .module('quotes')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('quotes', {
        parent: 'site',
        url: '/quotes',
        templateUrl: 'quotes/quotes.tpl.html',
        controller: 'QuotesCtrl',
        controllerAs: 'quotes'
      });
  }
}());
