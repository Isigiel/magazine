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
    .module('data')
    .controller('DataCtrl', DataCtrl);

  function DataCtrl(Ref, $firebaseArray, user) {
    var vm = this, users;
    vm.user = user;
    vm.users = $firebaseArray(Ref.child('users'));
    vm.author = function (comment) {
      return vm.users.$getRecord(comment.author);
    };
    vm.users.$loaded().then(function () {
      vm.users.forEach(function (user) {
        user.comments = $firebaseArray(Ref.child('comments').orderByChild('person').equalTo(user.$id));
      });
    });
  }
}());
