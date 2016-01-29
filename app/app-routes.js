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
        currentAuth: function (Auth) {
          // $waitForAuth returns a promise so the resolve waits for it to complete
          return Auth.$requireAuth();
        },
        user: function (Auth, $firebaseObject, Ref) {
          var user = $firebaseObject(Ref.child('users/' + Auth.$getAuth().uid));
          return user.$loaded();
        }
      },
      template: '<ui-view flex layout="column" />'
    });
  }
}());
