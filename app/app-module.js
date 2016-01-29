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
      'profile'
    ]);

  angular.module('magazine').config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
  });
}());
