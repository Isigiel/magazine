/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('RumorsCtrl', function () {
  var ctrl;

  beforeEach(module('rumors'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('RumorsCtrl');
  }));

  it('should have ctrlName as RumorsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('RumorsCtrl');
  });
});
