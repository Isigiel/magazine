(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name magazine.directive:menuButton
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="magazine">
       <file name="index.html">
        <menu-button></menu-button>
       </file>
     </example>
   *
   */
  angular
    .module('magazine')
    .directive('menuButton', menuButton);

  function menuButton() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/menu-button-directive.tpl.html',
      replace: false,
      controllerAs: 'menuButton',
      controller: function ($mdSidenav) {
        var vm = this;
        vm.toggleSidebar = function () {
          $mdSidenav('left').toggle();
        };
        vm.name = 'menuButton';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
