'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});
	it('should return true if valid', function() {
		expect(functions.findMaxDiff).to.be.true;
	})
	it('should throw an exception if invalid', function() {
		expect(function() {functions.findMaxDiff}).to.throw('Invalid Input');
	})
	it('should be an integer', function() {
		expect(functions.sumSquares(123)).to.contain.a('integer');
	})
});