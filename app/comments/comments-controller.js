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

  function CommentsCtrl() {
    var vm = this;
    vm.ctrlName = 'CommentsCtrl';
  }
}());
