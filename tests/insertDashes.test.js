'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
	it('should return true if valid', function() {
		expect(functions.insertDashes).to.be.true;
	})
	it('should throw an exception if invalid', function() {
		expect(function() {functions.insertDashes}).to.throw('Invalid Input');
	})
	it('should contain a string value', function() {
		expect(functions.insertDashes('abc')).to.contain.a('string');
	})
});