'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMin', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should return true if valid', function() {
		expect(functions.myMin).to.be.true;
	})
	it('should throw an exception if invalid', function() {
		expect(function() {functions.myMin}).to.throw('Invalid Input');
	})
	it('should contain a number', function() {
		expect(functions.myMin(123)).to.contain(Number);
	})
});