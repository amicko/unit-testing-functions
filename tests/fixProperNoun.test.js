'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});
	it('should capitalize proper noun if first letter is not capitalized', function() {
		expect(functions.fixProperNoun('Allen')).to.be.equal('Allen');
	});
	it('should throw error if first letter is not capitalized', function() {
		expect(function() {functions.fixProperNoun('washington') }).to.throw('Invalid Input');
	})
	it('should return false if proper noun is not capitalized', function() {
		expect(functions.fixProperNoun('abc')).to.be.true;
	})
	it('should throw error if input is not a string', function() {
		expect(function() {functions.fixProperNoun([a]) }).to.throw('Invalid Input');
	})
});