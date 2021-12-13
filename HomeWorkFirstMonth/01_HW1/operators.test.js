const { getMultiplyOrSumm,
    getPosition,
    summPositive,
    calc,
    getGrade } = require('./operators');
const assert = require('assert');

describe('getMultiplyOrSumm', function (){
    it('if "a" is even return a * b, else a + b', function () {
        assert.equal(getMultiplyOrSumm(1, 2), 3);
        assert.equal(getMultiplyOrSumm(2, 3), 6);
    });
    it('argument should be a "number"', function (){
       assert.equal(getMultiplyOrSumm('1', 2), 'incorrect input');
    });
    it('argument should be b "number"', function (){
        assert.equal(getMultiplyOrSumm(1, '2'), 'incorrect input');
    });
});

describe('getPosition', function (){
    it('argument "a" should be a "number"', function (){
        assert.equal(getPosition('1', 2), 'incorrect input');
    });
    it('argument "b" should be a "number"', function (){
        assert.equal(getPosition(1, '2'), 'incorrect input');
    });
    it('should return the point belongs to the I quarter', function (){
        assert.equal(getPosition(1,1), 'The point belongs to the I quarter')
    });
    it('should return the point belongs to the II quarter', function (){
        assert.equal(getPosition(-1,1), 'The point belongs to the II quarter')
    });
    it('should return the point belongs to the III quarter', function (){
        assert.equal(getPosition(-1,-1), 'The point belongs to the III quarter')
    });
    it('should return the point belongs to the IV quarter', function (){
        assert.equal(getPosition(1,-1), 'The point belongs to the IV quarter')
    });
    it('should return the point belongs to the y-axis', function (){
        assert.equal(getPosition(0,1), 'The point belongs to the y-axis')
    });
    it('should return the point belongs to the y-axis', function (){
        assert.equal(getPosition(0,-1), 'The point belongs to the y-axis')
    });
    it('should return the point belongs to the x-axis', function (){
        assert.equal(getPosition(1,0), 'The point belongs to the x-axis')
    });
    it('should return the point belongs to the x-axis', function (){
        assert.equal(getPosition(-1,0), 'The point belongs to the x-axis')
    });
    it('should return the point belongs to the origin', function (){
        assert.equal(getPosition(0,0), 'The point belongs to the origin')
    });
});

describe('summPositive', function (){
    it('argument "a" should be a "number"', function (){
        assert.equal(summPositive('1', 2, 3), 'incorrect input');
    });
    it('argument "b" should be a "number"', function (){
        assert.equal(summPositive(1, '2', 3), 'incorrect input');
    });
    it('argument "c" should be a "number"', function (){
        assert.equal(summPositive(1, 2, '3'), 'incorrect input');
    });
    it('a should be > 0, b <= 0, c <=0', function (){
        assert.equal(summPositive(1, -5, 0), 1);
    });
    it('b should be > 0, a <= 0, c <=0', function (){
        assert.equal(summPositive(-1, 5, 0), 5);
    });
    it('c should be > 0, b <= 0, a <=0', function (){
        assert.equal(summPositive(1, 5, -2), 6);
    });
    it('a should be > 0, b <= 0, c <=0', function (){
        assert.equal(summPositive(1, -5, 3), 4);
    });
    it('a should be > 0, b <= 0, c <=0', function (){
        assert.equal(summPositive(1, 5, 1), 7);
    });
});

describe('calc', function (){
    it('argument "a" should be a "number"', function (){
        assert.equal(calc('1', 2, 3), 'incorrect input');
    });
    it('argument "b" should be a "number"', function (){
        assert.equal(calc(1, '2', 3), 'incorrect input');
    });
    it('argument "b" should be a "number"', function (){
        assert.equal(calc(1, 2, '3'), 'incorrect input');
    });
    it('if multiply > summ', function (){
        assert.equal(calc(3, 3, 3), 30);
    });
    it('if multiply < summ', function (){
        assert.equal(calc(1, 1, 1), 6);
    });
});

describe('getGrade', function (){
    it('argument "a" should be a "number"', function (){
        assert.equal(getGrade('1'), false);
    });
    it('a === 0', function (){
        assert.equal(getGrade(0), 'out of rating');
    });
    it('a > 100', function () {
        assert.equal(getGrade(123), 'out of rating')
    });
    it('a < 20', function () {
        assert.equal(getGrade(12), 'F')
    });
    it('a === 20', function () {
        assert.equal(getGrade(20), 'E')
    });
    it('a < 40', function () {
        assert.equal(getGrade(24), 'E')
    });
    it('a < 60', function () {
        assert.equal(getGrade(55), 'D')
    });
    it('a < 75', function () {
        assert.equal(getGrade(74), 'C')
    });
    it('a < 90', function () {
        assert.equal(getGrade(87), 'B')
    });
    it('a < 100', function () {
        assert.equal(getGrade(99), 'A')
    });
});