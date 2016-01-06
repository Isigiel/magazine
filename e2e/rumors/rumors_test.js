/* global describe, beforeEach, it, browser, expect */
'use strict';

var RumorsPagePo = require('./rumors.po');

describe('Rumors page', function () {
  var rumorsPage;

  beforeEach(function () {
    rumorsPage = new RumorsPagePo();
    browser.get('/#/rumors');
  });

  it('should say RumorsCtrl', function () {
    expect(rumorsPage.heading.getText()).toEqual('rumors');
    expect(rumorsPage.text.getText()).toEqual('RumorsCtrl');
  });
});
