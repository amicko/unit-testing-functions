'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});
	it('should return true if valid', function() {
		expect(functions.studentPairs).to.be.true;
	})
	it('should be an array', function() {
		expect(functions.studentPairs([])).to.be.an('array');
	})
	it('should return two students', function() {
		console.log(pairs);
		expect(functions.studentPairs(['Aaron', 'Sam'])).to.have.length.of.at.least(2);
	})
	it('should not allow non-string students', function() {
		expect(functions.studentPairs([1, 2, 3])).to.throw('Invalid Input');
	})
});