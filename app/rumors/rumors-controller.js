(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name rumors.controller:RumorsCtrl
   *
   * @description
   *
   */
  angular
    .module('rumors')
    .controller('RumorsCtrl', RumorsCtrl);

  function RumorsCtrl($firebaseArray, Ref, $log, $mdToast, user) {
    var vm = this;
    vm.all = $firebaseArray(Ref.child('rumors'));
    vm.ctrlName = 'RumorsCtrl';
    vm.user = user;
    vm.delete = function (rumor) {
      vm.all.$remove(rumor).then(function () {
        $mdToast.showSimple('Gerücht gelöscht');
      });
    };
    vm.save = function (rumor) {
      rumor.content = rumor.newContent;
      delete rumor.edit;
      delete rumor.newContent;
      vm.all.$save(rumor).then(function () {
        $mdToast.showSimple('Änderung gespeichert');
      });
    };
    vm.edit = function (rumor) {
      rumor.newContent = rumor.content;
      rumor.edit = true;
    };
    vm.cancel = function (rumor) {
      rumor.edit = false;
    };
    vm.saveNew = function (form) {
      if (form.$valid) {
        vm.all.$add({
          content: vm.new,
          author: user.$id
        }).then(function () {
          $mdToast.showSimple('Gerücht gespeichert!');
        });
        vm.new = '';
        form.$setUntouched();
      } else {
        $mdToast.showSimple('Formular ungültig!');
      }
    }
  }
}());
