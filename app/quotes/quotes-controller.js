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

  function QuotesCtrl(Ref, $firebaseObject, $firebaseArray, $log) {
    var vm = this, users, userLoad, quoteLoad;
    vm.all = $firebaseArray(Ref.child('quotes'));
    users = $firebaseObject(Ref.child('users'));
    vm.all.$loaded().then(function () {
      quoteLoad = true;
      if (userLoad) {
        $log.info('users loaded first, adding authors');
        vm.all.forEach(function (quote) {
          quote.author = users[quote.author];
        });
      }
    });
    users.$loaded().then(function () {
      userLoad = true;
      if (quoteLoad) {
        $log.info('quotes loaded first, adding authors');
        vm.all.forEach(function (quote) {
          quote.author = users[quote.author];
        });
      }
    });
    vm.ctrlName = 'QuotesCtrl';
  }
}());
