'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMax', function() {
	it('should exist', function() {
		expect(functions.myMax).not.to.be.undefined;
	});
	it('should return true if valid', function() {
		expect(functions.myMax).to.be.true;
	})
	it('should throw an exception if invalid', function() {
		expect(function() {functions.myMax}).to.throw('Invalid Input');
	})
	it('should return an integer', function() {
		expect(functions.myMax).to.be.an('integer');
	})
	it('should contain an array', function() {
		expect(functions.myMax([''])).to.contain(Array);
	})
});