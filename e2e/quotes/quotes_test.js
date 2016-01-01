/* global describe, beforeEach, it, browser, expect */
'use strict';

var QuotesPagePo = require('./quotes.po');

describe('Quotes page', function () {
  var quotesPage;

  beforeEach(function () {
    quotesPage = new QuotesPagePo();
    browser.get('/#/quotes');
  });

  it('should say QuotesCtrl', function () {
    expect(quotesPage.heading.getText()).toEqual('quotes');
    expect(quotesPage.text.getText()).toEqual('QuotesCtrl');
  });
});
