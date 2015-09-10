'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters).not.to.be.undefined;
	});
	it('should return a string value', function() {
		expect(functions.sortLetters('abc')).to.be.a(String);
	})
	it('should not be an empty string value', function() {
		expect(functions.sortLetters('abc')).not.to.be.empty;
	})
	it('should return true if valid', function() {
		expect(functions.sortLetters).to.be.true;
	})
	it('should throw and error exception if invalid', function() {
		expect(function() { functions.sortLetters(123)}).to.throw('Invalid Input')
	})
});