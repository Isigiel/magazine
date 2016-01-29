(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name profile.controller:ProfileCtrl
   *
   * @description
   *
   */
  angular
    .module('profile')
    .controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl($firebaseObject, Ref, Auth) {
    var vm = this;
    vm.user = $firebaseObject(Ref.child('users').child(Auth.$getAuth().uid));
    vm.save = function () {
      vm.user.$save();
    };
  }
}());
