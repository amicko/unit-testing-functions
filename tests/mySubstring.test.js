'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubstring', function() {
	it('should exist', function() {
		expect(functions.mySubstring).not.to.be.undefined;
	});
	it('should return true if valid', function() {
		expect(functions.mySubstring).to.be.true;
	})
	it('should throw an exception if invalid', function() {
		expect(function() {functions.mySubstring}).to.throw('Invalid Input');
	})
	it('should contain a string value', function() {
		expect(functions.mySubstring('abc')).to.contain.a('string');
	})
});