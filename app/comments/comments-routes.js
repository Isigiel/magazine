(function () {
  'use strict';

  angular
    .module('comments')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('comments', {
        url: '/comments',
        templateUrl: 'comments/comments.tpl.html',
        controller: 'CommentsCtrl',
        controllerAs: 'comments'
      });
  }
}());
