const {
    getCookingTime,
    getNumber,
    findTitle,
    countCharacters,
    getNextPalindrome } = require('./script')

describe('getCookingTime', function () {
    test('how long egg cook', function () {
        expect(getCookingTime(6)).toBe(10);
    });
    test('how long egg cook', function () {
        expect(getCookingTime(11)).toBe(15);
    });
});

describe('getNumber', function (){
    test('if array include odd find even', function () {
        expect(getNumber([1,3,5,7,2,9,11])).toBe(2);
    });
    test('if array include even find odd', function () {
        expect(getNumber([2,4,6,8,10,3,16])).toBe(3);
    });
});

describe('findTitle', function () {
    let arr = [{
        title: 'Some title1'
    }, {
        title: 'I like JS'
    }, {
        user: 'This obj doesn\'t have key title js'
    }, {
        title: 'Js - is the best!'
    }];
    test('should return array with heading', function () {
        expect(findTitle(arr, 'js')).toEqual(["I like JS", "Js - is the best!"]);
    });
    test('should return array with heading', function () {
        expect(findTitle(arr, 'some')).toEqual(["Some title1"]);
    });
});

describe('countCharacters', function () {
    test('should return object with keys string, value number repeated', function () {
        expect(countCharacters('aabbcc')).toEqual({a: 2, b: 2, c: 2});
    });
    test('should return object with keys string, value number repeated', function () {
        expect(countCharacters('2 bbc 3')).toEqual({2: 1, b: 2, c: 1, 3: 1});
    });
});

describe('getNextPalindrome', function () {
    test('should return next bigger palindrome number', function () {
        expect(getNextPalindrome(8)).toBe(11);
    });
    test('should return next bigger palindrome number', function () {
        expect(getNextPalindrome(666)).toBe(676);
    });
});