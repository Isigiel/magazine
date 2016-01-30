(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name comments.controller:CommentsCtrl
   *
   * @description
   *
   */
  angular
    .module('comments')
    .controller('CommentsCtrl', CommentsCtrl);

  function CommentsCtrl(Ref, $firebaseArray, $mdToast, user) {
    var vm = this, commentRef = Ref.child('comments');
    vm.userQuery = [];
    vm.newComment = {};
    vm.nameRepo = {};
    vm.users = $firebaseArray(Ref.child('users').orderByChild('accepted').equalTo(true));
    vm.userData = user;
    vm.users.$loaded().then(function () {
      vm.users.forEach(function (userI) {
        vm.nameRepo[userI.$id] = {
          name: userI.name,
          image: userI.image
        };
        vm.userQuery.push({
          name: userI.name,
          id: userI.$id
        });
      });
    });
    vm.own = $firebaseArray(commentRef.orderByChild('author').equalTo(user.$id));
    vm.querySearch = querySearch;

    function querySearch(query) {
      console.log('search');
      return query ? searchFor(angular.lowercase(query)) : vm.userQuery;
    }

    function searchFor(query) {
      var res = [];
      vm.userQuery.forEach(function (userI) {
        if (angular.lowercase(userI.name).indexOf(query) > -1) {
          res.push(userI);
        }
      });
      return res;
    }

    vm.saveNew = function (form) {
      var comment = {};
      if (form.$valid) {
        comment.author = user.$id;
        comment.person = vm.selectedUser.id;
        comment.content = vm.new;
        vm.content = '';
        vm.own.$add(comment).then(function () {
          $mdToast.showSimple('Kommentar gespeichert');
        });
      } else {
        $mdToast.showSimple('Formular ungültig!');
      }
    };
    vm.delete = function (comment) {
      vm.own.$remove(comment).then(function () {
        $mdToast.showSimple('Kommentar gelöscht');
      });
    };
  }
}());
