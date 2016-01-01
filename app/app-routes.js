(function () {
  'use strict';

  angular
    .module('magazine')
    .config(config);

  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('site', {
      abstract: true,
      resolve: {
        authorize: ['Authorization',
          function (Authorization) {
            return Authorization.authorize();
          }
        ]
      },
      data: {
        roles: [
          'user'
        ]
      },
      template: '<ui-view flex layout="column" />'
    });
  }
}());
