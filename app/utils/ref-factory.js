(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name utils.factory:Ref
   *
   * @description
   *
   */
  angular
    .module('utils')
    .factory('Ref', Ref);

  function Ref($window) {
    return new $window.Firebase('https://sgm-paper.firebaseio.com/');
  }
}());
