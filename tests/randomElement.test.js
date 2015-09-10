'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
	it('should return true if valid', function() {
		expect(functions.randomElement).to.be.true;
	})
	it('should contain an array', function() {
		expect(functions.randomElement([])).to.contain(Array);
	})
});