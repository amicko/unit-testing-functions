'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sumSquares', function() {
	it('should exist', function() {
		expect(functions.sumSquares).not.to.be.undefined;
	});
	it('should return true if valid', function() {
		expect(functions.sumSquares).to.be.true;
	})
	it('should throw an exception if invalid', function() {
		expect(function() {functions.sumSquares}).to.throw('Invalid Input');
	})
	it('should be an integer', function() {
		expect(functions.sumSquares(123)).to.contain.a('integer');
	})
});