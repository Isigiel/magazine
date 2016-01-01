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
      templateUrl: '/sidenav-directive.tpl.html',
      replace: false,
      controllerAs: 'sidenav',
      controller: function (Principal, Auth) {
        var vm = this;
        vm.name = 'sidenav';
        vm.facebook = function () {
          Auth.$authWithOAuthPopup('facebook', {scope: 'email'}).then(function () {
            vm.loggedin = Principal.isAuthenticated();
            Principal.identity().then(function (user) {
              vm.user = user;
            });
          });
        };
        vm.logout = function () {
          Auth.$unauth();
          vm.loggedin = Principal.isAuthenticated();
          Principal.identity().then(function (user) {
            vm.user = user;
          });
        };
        vm.loggedin = Principal.isAuthenticated();
        if (vm.loggedin) {
          Principal.identity().then(function (user) {
            vm.user = user;
          });
        }
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
