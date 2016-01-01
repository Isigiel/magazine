/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Principal', function () {
  var factory;

  beforeEach(module('utils'));

  beforeEach(inject(function (Principal) {
    factory = Principal;
  }));

  it('should have someValue be Principal', function () {
    expect(factory.someValue).toEqual('Principal');
  });

  it('should have someMethod return Principal', function () {
    expect(factory.someMethod()).toEqual('Principal');
  });
});
