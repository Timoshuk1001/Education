const {
    getStringDayNumber,
    getDistance,
    convertToString,
    stringToNumberName } = require('./functions.js');
const assert = require('assert');

describe('getStringDayNumber', function (){
    it('return name of a day', function (){
        assert.equal(getStringDayNumber(1), 'Sunday');
        assert.equal(getStringDayNumber(2), 'Monday');
        assert.equal(getStringDayNumber(3), 'Tuesday');
        assert.equal(getStringDayNumber(4), 'Wednesday');
        assert.equal(getStringDayNumber(5), 'Thursday');
        assert.equal(getStringDayNumber(6), 'Friday');
        assert.equal(getStringDayNumber(7), 'Saturday');
    });
});

describe('getDistance', function (){
    it('return distance between two points', function (){
        assert.equal(getDistance(0, 11, 0, 0), 11);
    });
});

describe('convertToString', function (){
    it('return string value of number', function (){
         assert.equal(convertToString(1), 'one ');
         assert.equal(convertToString(123), 'one hundred twenty three ');
    });
});

describe('stringToNumberName', function (){
    it('return number of string value', function (){
        assert.equal(stringToNumberName('three hundred fifty six'), 356);
        assert.equal(stringToNumberName('one'), 1);
        assert.equal(stringToNumberName('one hundred fifty six'), 156);
    });
});