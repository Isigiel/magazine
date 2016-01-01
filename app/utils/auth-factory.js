(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name utils.factory:Auth
   *
   * @description
   *
   */
  angular
    .module('utils')
    .factory('Auth', Auth);

  function Auth($firebaseAuth, Ref) {
    return $firebaseAuth(Ref);
  }
}());
