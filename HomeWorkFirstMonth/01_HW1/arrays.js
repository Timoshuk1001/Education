// Массивы

// 1.	Найти минимальный элемент массива

function minElementArray(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
  }
  
  return min;
}

// 2.	Найти максимальный элемент массива

function maxElementArray(array) {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }

  return max;
}

// 3.	Найти индекс минимального элемента массива

function minIndexElementArray(array) {
  let minIndex = 0;
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      minIndex = i;
    }
  }

  return minIndex;
}

// 4.	Найти индекс максимального элемента массива 

function maxIndexElementArray(array) {
  let maxIndex = 0;
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

// 5.	Посчитать сумму элементов массива с нечетными индексами

function summElemOddIndex(array) {
  let summ = 0;

  for (let i = 0; i < array.length; i++) {
     if (i % 2 !== 0) summ += array[i];
  }

  return summ;
}

// 6.	Сделать реверс массива (массив в обратном направлении)


function arrayReverse(array) {
  let reversed = array.reverse()

  return reversed;
}

function arrayReverse2(array) {
  let result = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

function arrayReverse3(array) {
  for(let i = 0; i < array.length-1; i++) {
    for(let j = 0; j < array.length-i-1; j++) {
      let k = array[j];
      array[j] = array[j+1];
      array[j+1] = k;
    }
  }

  return array;
}

function arrayReverse4(array) {
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    let k = array[i];
    array[i] = array[j];
    array[j] = k;
  }

  return array;
}



// 7.	Посчитать количество нечетных элементов массива

function numberOddElem(array) {
   let number = 0;

   for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) number++;
  }

  return number;
}

// 8.	Поменять местами первую и вторую половину массива

function reversePartsElem(array) {
  const moduleOfTwo = array.length % 2;
  const middle = array.length / 2;
  let reverse = middle + moduleOfTwo;
  const isEvenCase = moduleOfTwo !== 0;
  const isOddCase = moduleOfTwo === 0;

  if(isEvenCase) reverse = parseInt(reverse);

  for (let i = 0; i < middle; i++) {
    let k = array[i];
    if(isOddCase) {
      array[i] = array[reverse + i];
      array[reverse + i] = k;
    }
    else {
      if(array[i] === reverse) {
        continue;
      }
      array[i] = array[reverse + i];
      array[reverse + i] = k;
    }
  }

  return array;
}

// 9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 

// Пузырьком (Bubble)

function bubbleSort(array) {
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i+1] < array[i]) {
        let k = array[i+1];
        array[i+1] = array[i];
        array[i] = k;
      }
    }
  }

  return array;
}


// Выбором (Select)

function selectSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) { 
      let k = array[min];
      array[min] = array[i];
      array[i] = k;
    }
  }

  return array;
}

// Вставками (Insert)

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let k = array[i];
    while (j >= 0 && array[j] > k) {
      array[j + 1] = array[j];
      j--
    }
    array[j + 1] = k;
  }

  return array;
}

// 10.	Отсортировать массив (Quick, Merge, Shell, Heap)

// Quick

function QuickSort(array) {
    if (array.length === 0) return array;
    let a = [];
    let b = []; 
    let p = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < p) {
      a[a.length] = array[i];
    } else b[b.length] = array[i];
  }
    return QuickSort(a).concat(p,QuickSort(b));
}

// Merge

function mergeSort(array) {
  let result = array.slice(0);
 
  function sort(array) {
    let length = array.length,
    mid = parseInt(length * 0.5),
    left = array.slice(0, mid),
    right = array.slice(mid, length);
 
    if (length === 1) {
      return array;
    }
    return merge(sort(left), sort(right));
  }
 
  function merge(left, right) {
    let result = [];
 
    while (left.length || right.length) {
 
      if (left.length && right.length) {
 
        if (left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
 
      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result;
  }
 
  return sort(result);
}

// Shell

function shellSort(array) {
  let mid = parseInt(array.length / 2);

  while (mid >= 1) {
      for (let i = mid; i < array.length; i++) {
          let current = array[i];
          let j = i;

          while (j > 0 && array[j - mid] > current) {
              array[j] = array[j - mid];
              j -= mid;
          }
          array[j] = current;
      }
      mid = parseInt(mid / 2);
  }
  return array;
}


// Heap

function heapify(array, length, parentIndex) {
  let largest = parentIndex;
  let left = parentIndex * 2 + 1;
  let right = left + 1;

  if (left < length && array[left] > array[largest]) {
    largest = left;
  }

  if (right < length && array[right] > array[largest]) {
    largest = right;
  }
  
  if (largest !== parentIndex) {
    [array[parentIndex], array[largest]] = [array[largest], array[parentIndex]];

    heapify(array, length, largest);
  }
  return array;
}

function heapSort(array){
  let length = array.length;
  let lastParent = parseInt(length / 2 - 1);
  let lastChild = length - 1;

  while (lastParent >= 0) {
    heapify(array, length, lastParent);
    lastParent--;
  }

  while (lastChild >= 0) {
    [array[0], array[lastChild]] = [array[lastChild], array[0]];
    heapify(array, lastChild, 0);
    lastChild--;
  }
  return array;
}