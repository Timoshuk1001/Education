const {
    minElementArray,
    maxElementArray,
    minIndexElementArray,
    maxIndexElementArray,
    summElemOddIndex,
    arrayReverse,
    arrayReverse2,
    arrayReverse3,
    arrayReverse4,
    numberOddElem,
    reversePartsElem,
    bubbleSort,
    selectSort,
    insertSort,
    quickSort,
    mergeSort,
    shellSort,
    heapSort } = require('./arrays.js');
const assert = require('assert');

describe('minElementArray', function (){
    it('return minimal element of array', function (){
        assert.equal(minElementArray([5, 3, 2, 1]), 1);
    });
});

describe('maxElementArray', function (){
    it('return maximal element of array', function (){
        assert.equal(maxElementArray([1, 3, 5, 4]), 5);
    });
});

describe('minIndexElementArray', function (){
    it('return minimal index of element array', function (){
        assert.equal(minIndexElementArray([5, 3, 1, 2]), 2);
    });
});

describe('maxIndexElementArray', function (){
    it('return maximal index of element array', function (){
        assert.equal(maxIndexElementArray([1, 3, 2, 5]), 3);
    });
});

describe('summElemOddIndex', function (){
    it('return summ of odd index', function (){
        assert.equal(summElemOddIndex([2, 1, 2, 6, 8, 5, 2, 3, -1]), 15);
    });
});

describe('arrayReverse', function (){
    it('return reversed array', function (){
        assert.deepEqual(arrayReverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
});

describe('arrayReverse2', function (){
    it('return reversed array', function (){
        assert.deepEqual(arrayReverse2([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
});

describe('arrayReverse3', function (){
    it('return reversed array', function (){
        assert.deepEqual(arrayReverse3([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
});

describe('arrayReverse4', function (){
    it('return reversed array', function (){
        assert.deepEqual(arrayReverse4([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
});

describe('numberOddElem', function (){
    it('return sum of odd elements', function (){
        assert.equal(numberOddElem([1, 2, 3, 4, 5, 6]), 3);
    });
});

describe('reversePartsElem', function (){
    it('return swap part of array', function (){
        assert.deepEqual(reversePartsElem([1, 2, 3, 4]), [3, 4, 1, 2]);
        assert.deepEqual(reversePartsElem([1, 2, 3, 4, 5]), [4, 5, 3, 1, 2]);
    });
});

describe('bubbleSort', function (){
    it('return sorted array', function (){
        assert.deepEqual(bubbleSort([2, -3, 1, 8, 5]), [-3, 1, 2, 5, 8]);
    });
});

describe('selectSort', function (){
    it('return sorted array', function (){
        assert.deepEqual(selectSort([2, -3, 1, 8, 5]), [-3, 1, 2, 5, 8]);
    });
});

describe('insertSort', function (){
    it('return sorted array', function (){
        assert.deepEqual(insertSort([2, -3, 1, 8, 5]), [-3, 1, 2, 5, 8]);
    });
});

describe('quickSort', function (){
    it('return sorted array', function (){
        assert.deepEqual(quickSort([2, -3, 1, 8, 5]), [-3, 1, 2, 5, 8]);
    });
});

describe('mergeSort', function (){
    it('return sorted array', function (){
        assert.deepEqual(mergeSort([2, -3, 1, 8, 5]), [-3, 1, 2, 5, 8]);
    });
});

describe('shellSort', function (){
    it('return sorted array', function (){
        assert.deepEqual(shellSort([2, -3, 1, 8, 5]), [-3, 1, 2, 5, 8]);
    });
});

describe('heapSort', function (){
    it('return sorted array', function (){
        assert.deepEqual(heapSort([2, -3, 1, 8, 5]), [-3, 1, 2, 5, 8]);
    });
});