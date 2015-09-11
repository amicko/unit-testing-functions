'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;
	});
	it('should throw an exception if input is not an array', function(){
		expect(function() {functions.concatenateArrays(123) }).to.throw('Invalid Input');
	})
	it('should contain two arrays that concatenate into one', function() {
		expect(functions.concatenateArrays).to.be.instanceOf('array');
	})
});