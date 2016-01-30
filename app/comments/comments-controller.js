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
    var vm = this;
    vm.userQuery = [];
    vm.newComment = {};
    vm.nameRepo = {};
    var commentRef = Ref.child('comments');
    //vm.saveNew = saveNewComment;
    vm.users = $firebaseArray(Ref.child('users').orderByChild('accepted').equalTo(true));
    vm.userData = user;
    vm.users.$loaded().then(function () {
      vm.users.forEach(function (user) {
        vm.nameRepo[user.$id] = {
          name: user.name,
          image: user.image
        };
        vm.userQuery.push({
          name: user.name,
          id: user.$id
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
      vm.userQuery.forEach(function (user) {
        if (angular.lowercase(user.name).indexOf(query) > -1) {
          res.push(user);
        }
      });
      return res;
    }

    vm.saveNew = function (form) {
      if (form.$valid) {
        var comment = {};
        comment.author = user.$id;
        comment.person = vm.selectedUser.id;
        comment.content = vm.new;
        vm.content = "";
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
