// jscs:disable disallowDanglingUnderscores
/* eslint-disable no-underscore-dangle, no-undef-init, max-len */
(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name utils.factory:Principal
   *
   * @description
   *
   */
  angular
    .module('utils')
    .factory('Principal', Principal);

  function Principal($q, Auth, $firebaseObject, Ref, $log) {
    var _identity = undefined;

    return {
      isIdentityResolved: function () {
        return angular.isDefined(_identity);
      },
      isAuthenticated: function () {
        return Auth.$getAuth();
      },
      isInRole: function (role) {
        if (!Auth.$getAuth() || !_identity.roles) {
          return false;
        }

        return _identity.roles.indexOf(role) !== -1;
      },
      isInAnyRole: function (roles) {
        var i;
        if (!Auth.$getAuth() || !_identity.roles) {
          $log.info(!Auth.$getAuth());
          return false;
        }

        for (i = 0; i < roles.length; i++) {
          if (this.isInRole(roles[i])) {
            return true;
          }
        }

        return false;
      },
      authenticate: function () {
        _identity = $firebaseObject(Ref.child('users').child(Auth.$getAuth().uid));
      },
      identity: function (force) {
        var deferred = $q.defer();

        if (force === true) {
          _identity = undefined;
        }
        // check and see if we have retrieved the identity data from the server. if we have, reuse it by immediately resolving
        if (angular.isDefined(_identity)) {
          deferred.resolve(_identity);

          return deferred.promise;
        }

        // otherwise, retrieve the identity data from the server, update the identity object, and then resolve.
        //                   $http.get('/svc/account/identity', { ignoreErrors: true })
        //                        .success(function(data) {
        //                            _identity = data;
        //                            _authenticated = true;
        //                            deferred.resolve(_identity);
        //                        })
        //                        .error(function () {
        //                            _identity = null;
        //                            _authenticated = false;
        //                            deferred.resolve(_identity);
        //                        });

        // for the sake of the demo, fake the lookup by using a timeout to create a valid
        // fake identity. in reality,  you'll want something more like the $http request
        // commented out above. in this example, we fake looking up to find the user is
        // not logged in
        if (Auth.$getAuth()) {
          _identity = $firebaseObject(Ref.child('users').child(Auth.$getAuth().uid));
          _identity.$loaded().then(function () {
            deferred.resolve(_identity);
          });
        } else {
          _identity = null;
          deferred.resolve(_identity);
        }
        return deferred.promise;
      }
    };
  }
}());
