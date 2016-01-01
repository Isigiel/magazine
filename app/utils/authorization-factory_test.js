/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Authorization', function () {
  var factory;

  beforeEach(module('utils'));

  beforeEach(inject(function (Authorization) {
    factory = Authorization;
  }));

  it('should have someValue be Authorization', function () {
    expect(factory.someValue).toEqual('Authorization');
  });

  it('should have someMethod return Authorization', function () {
    expect(factory.someMethod()).toEqual('Authorization');
  });
});
