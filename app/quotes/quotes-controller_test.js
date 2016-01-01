/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('QuotesCtrl', function () {
  var ctrl;

  beforeEach(module('quotes'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('QuotesCtrl');
  }));

  it('should have ctrlName as QuotesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('QuotesCtrl');
  });
});
