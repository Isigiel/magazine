(function () {
  'use strict';

  /* @ngdoc object
   * @name utils
   * @description
   *
   */
  angular
    .module('utils', [
      'ui.router'
    ])
    .run(['$rootScope', '$state', '$stateParams', 'Authorization', 'Principal',
      function ($rootScope, $state, $stateParams, Authorization, Principal) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
          // track the state the user wants to go to; Authorization service needs this
          $rootScope.toState = toState;
          $rootScope.toStateParams = toStateParams;
          // if the Principal is resolved, do an Authorization check immediately. otherwise,
          // it'll be done when the state it resolved.
          if (Principal.isIdentityResolved()) {
            Authorization.authorize();
          }
        });
      }
    ]);
}());
