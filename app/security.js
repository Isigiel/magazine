(function () {
  'use strict';
  // for ui-router
  angular.module('magazine').run(function ($rootScope, $state, Auth) {
    Auth.$onAuth(function (authData) {
      if (!authData) {
        $state.go('home');
      }
    });
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the home page
      if (error === 'AUTH_REQUIRED') {
        $state.go('home');
      }
    });
  });
}());
