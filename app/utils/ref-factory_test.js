/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Ref', function () {
  var factory;

  beforeEach(module('utils'));

  beforeEach(inject(function (Ref) {
    factory = Ref;
  }));

  it('should have someValue be Ref', function () {
    expect(factory.someValue).toEqual('Ref');
  });

  it('should have someMethod return Ref', function () {
    expect(factory.someMethod()).toEqual('Ref');
  });
});
