'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});
	it('should return true if valid', function() {
		expect(functions.getMonth).to.be.true;
	})
	it('should throw an exception if invalid', function() {
		expect(function() {functions.getMonth}).to.throw('Invalid Input');
	})
	it('should contain an array', function () {
		expect(functions.getMonth([])).to.contain(Array);
	})
});