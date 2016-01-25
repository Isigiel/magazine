(function () {
  'use strict';

  angular
    .module('profile')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('profile', {
        parent: 'site',
        url: '/profile',
        templateUrl: 'profile/profile.tpl.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      });
  }
}());
