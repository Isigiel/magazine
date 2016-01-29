(function () {
  'use strict';
  angular
    .module('firebase.auth', ['firebase', 'firebase.ref'])
    .factory('Auth', Auth);

  function Auth($firebaseAuth, Ref) {
    return $firebaseAuth(Ref);
  }
}());
