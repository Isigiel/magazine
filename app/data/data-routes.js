(function () {
  'use strict';

  angular
    .module('data')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('data', {
        parent: 'site',
        url: '/data',
        templateUrl: 'data/data.tpl.html',
        controller: 'DataCtrl',
        controllerAs: 'data'
      });
  }
}());
