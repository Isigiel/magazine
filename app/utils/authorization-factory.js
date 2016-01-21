// jscs:disable maximumLineLength
/* eslint-disable max-len */
(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name utils.factory:Authorization
   *
   * @description
   *
   */
  angular
    .module('utils')
    .factory('Authorization', Authorization);

  function Authorization($rootScope, $state, Principal, $log) {
    return {
      authorize: function () {
        return Principal.identity()
          .then(function () {
            var isAuthenticated = Principal.isAuthenticated();
            $log.debug($rootScope.toState);
            if ($rootScope.toState.data && $rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0 && !Principal.isInAnyRole($rootScope.toState.data.roles)) {
              if (isAuthenticated) {
                $log.warn('Access denied');
                // user is signed in but not authorized for desired state
              } else {
                // user is not authenticated. stow the state they wanted before you
                // send them to the signin state, so you can return them when you're done
                $rootScope.returnToState = $rootScope.toState;
                $rootScope.returnToStateParams = $rootScope.toStateParams;

                // now, send them to the signin state so they can log in
                $state.go('home');
              }
            }
          });
      }
    };
  }
}());
