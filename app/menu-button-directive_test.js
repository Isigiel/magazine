/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('menuButton', function () {
  var scope
    , element;

  beforeEach(module('magazine', '/menu-button-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<menu-button></menu-button>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().menuButton.name).toEqual('menuButton');
  });
});
