(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name quotes.controller:QuotesCtrl
   *
   * @description
   *
   */
  angular
    .module('quotes')
    .controller('QuotesCtrl', QuotesCtrl);

  function QuotesCtrl(Ref, $firebaseArray, $log, $mdToast, user) {
    var vm = this, users;
    vm.user = user;
    users = $firebaseArray(Ref.child('users'));
    vm.author = function (quote) {
      return users.$getRecord(quote.author);
    };
    vm.edit = function (quote) {
      $log.debug('EDIT');
      quote.newContent = quote.content;
      quote.edit = true;
    };
    vm.cancel = function (quote) {
      quote.edit = false;
    };
    vm.save = function (quote) {
      quote.content = quote.newContent;
      delete quote.newContent;
      delete quote.edit;
      vm.all.$save(quote).then(function () {
        $mdToast.showSimple('Änderungen gespeichert');
      });
    };
    vm.toggle = function (quote) {
      if(quote.loaded)
        quote.loaded = !quote.loaded;
      else
        quote.loaded = true;
      vm.all.$save(quote).then(function () {
        $mdToast.showSimple('Änderungen gespeichert');
      });
    };
    users.$loaded().then(function () {
      vm.all = $firebaseArray(Ref.child('quotes'));
    });
    vm.delete = function (quote) {
      vm.all.$remove(quote).then(function () {
        $mdToast.showSimple('Stilblüte gelöscht');
      });
    };
    vm.saveNew = function (form) {
      if (form.$valid) {
        vm.all.$add({
          content: vm.new,
          author: user.$id
        }).then(function () {
          $mdToast.showSimple('Stilblüte gespeichert!');
        });
        vm.new = '';
        form.$setUntouched();
      } else {
        $mdToast.showSimple('Formular ungültig!');
      }
    };
  }
}());
