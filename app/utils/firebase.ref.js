(function () {
  'use strict';

  angular
    .module('firebase.ref', ['firebase', 'firebase.config'])
    .factory('Ref', Ref);

  function Ref($window, FBURL) {
    return new $window.Firebase(FBURL);
  }
}());
