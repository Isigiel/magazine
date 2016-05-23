(function () {
  'use strict';

  /* @ngdoc object
   * @name magazine
   * @description
   *
   */
  angular
    .module('magazine', [
      'ngMaterial',
      'ngMessages',
      'ui.router',
      'home',
      'firebase',
      'firebase.ref',
      'firebase.auth',
      'firebase.config',
      'quotes',
      'rumors',
      'profile',
      'comments',
      'data'
    ]);

  angular
    .module('magazine')
    .config(function ($mdThemingProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');
    });
}());
