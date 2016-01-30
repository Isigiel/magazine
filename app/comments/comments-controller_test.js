/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CommentsCtrl', function () {
  var ctrl;

  beforeEach(module('comments'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CommentsCtrl');
  }));

  it('should have ctrlName as CommentsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('CommentsCtrl');
  });
});
