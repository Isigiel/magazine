(function () {
  'use strict';

  angular
    .module('rumors')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('rumors', {
        url: '/rumors',
        parent: 'site',
        templateUrl: 'rumors/rumors.tpl.html',
        controller: 'RumorsCtrl',
        controllerAs: 'rumors'
      });
  }
}());
