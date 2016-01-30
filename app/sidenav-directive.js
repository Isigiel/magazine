(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name magazine.directive:sidenav
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
   <example module="magazine">
   <file name="index.html">
   <sidenav></sidenav>
   </file>
   </example>
   *
   */
  angular
    .module('magazine')
    .directive('sidenav', sidenav);

  function sidenav() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'sidenav-directive.tpl.html',
      replace: false,
      controllerAs: 'sidenav',
      controller: function (Auth, $log, $firebaseObject, Ref) {
        var vm = this, user, authData;
        authData = Auth.$getAuth();
        if (authData) {
          vm.loggedin = true;
          vm.user = $firebaseObject(Ref.child('users/' + authData.uid));
        } else {
          vm.loggedin = false;
          vm.user = undefined;
        }
        vm.facebook = function () {
          Auth.$authWithOAuthPopup('facebook', {scope: 'email'}).then(function (authData) {
            user = $firebaseObject(Ref.child('users/' + authData.uid));
            $log.debug('Authenticated');
            user.$loaded().then(function () {
              var provider = authData.provider;
              vm.loggedin = true;
              vm.user = user;
              user.image = authData[provider].profileImageURL;
              user.$save();
            });
          });
          vm.logout = function () {
            console.log('Logout detected');
            Auth.$unauth();
            vm.loggedin = false;
          };
        };
      }
    };
  }
}());
