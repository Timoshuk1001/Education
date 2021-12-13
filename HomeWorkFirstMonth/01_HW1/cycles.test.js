const { summEvenNubmers,
    isPrime,
    sqrtNatural,
    binarySearch,
    factorial,
    summGivenNumber,
    reverseNumber } = require('./cycles');
const assert = require('assert');

describe('summEvenNubmers', function (){
   it('return sum and num even numbers from 1 to 99', function (){
       assert.deepEqual(summEvenNubmers(), {summOfEvenElements: 2450, numOfEvenElements: 49});
   });
});

describe('isPrime', function (){
    it('if number prime return true, else false', function (){
        assert.equal(isPrime(6), false);
        assert.equal(isPrime(3), true);
    });
});

describe('sqrtNatural', function () {
   it('return sqrt of number', function (){
      assert.equal(sqrtNatural(25), 5);
   });
});

describe('binarySearch', function (){
    it('return sqrt of number from binary search', function (){
        assert.equal(binarySearch(16), 4);
    });
});

describe('factorial', function (){
   it('factorial of number', function (){
       assert.equal(factorial(5), 120);
   });
});

describe('summGivenNumber', function (){
    it('sum of chats in number', function (){
       assert.equal(summGivenNumber(555), 15);
    });
});

describe('reverseNumber', function (){
    it('return reverse array of number', function (){
        assert.equal(reverseNumber(123), 321);
    });
});
