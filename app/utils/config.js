(function () {
  'use strict';

  angular
    .module('firebase.config', [])
    .constant('FBURL', 'https://sgm-paper.firebaseio.com')
    .constant('loginRedirectPath', '/login');
}());
