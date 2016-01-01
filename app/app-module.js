(function () {
  'use strict';

  /* @ngdoc object
   * @name magazine
   * @description
   *
   */
  angular
    .module('magazine', [
      'ngAria',
      'ngMaterial',
      'ui.router',
      'home',
      'firebase',
      'utils',
      'quotes'
    ]);

  angular.module('magazine').config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
  });
}());
