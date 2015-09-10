'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should return an integer', function() {
		expect(functions.absVal(123)).to.contain(Number);
	})
	it('should throw exception if invalid', function() {
		expect(function() {functions.absVal}).to.throw('Invalid Input');
	})
	it('should return true if valid', function() {
		expect(functions.absVal).to.be.true;
	})
});