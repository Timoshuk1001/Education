// Циклы

// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function summEvenNubmers(){
  let summ = 0;
  let num = 0;

  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
      summ += i;
      num++;
    }
  } 
  
  return {
    summOfEvenElements: summ,
    numOfEvenElements: num,
  }
}


// 2.	Проверить простое ли число?

function isPrime(num){
  for (let i = 2; i < num; i++)

  if (num % i === 0) return false;

  return num > 1;
}


// 3.	Найти корень натурального числа с точностью до целого 

// Последовательный подбор

function sqrtNatural(x){
  let sqrt = 0;

  for (let i = 0; i < x; i++) {
  if (i * i <= x) sqrt = i;
}

  return sqrt;
}

// Бинарный поиск

// Есть вопросы Math.floor, parseInt, ~~, x - (x%1) 


function binarySearch(x) {
  let start = 0;
  let middle = 0;
  let end = x;

  while (end - start > 1) {
    middle = parseInt((start + end) / 2);

    middle * middle <= x ? start = middle : end = middle;
  }

  return start;
}


// 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;


function factorial(x) {
  let total = 1;

  for (let i = 0; i < x; i++) {
    total = total * (x - i);
  }

  return total;
}

// 5.	Посчитать сумму цифр заданного числа

function summGivenNumber(x) {
  let summ = 0;
  let y = String(x);

  for (let i = 0; i < y.length; i++) {
    summ += Number(y[i]);
  }

   return summ;
}


// 6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
// например, задано число 123, вывести 321.


function reverseNumber(x) {
  let num = 0;
  let result = 0;

  while(x > 0) {
    num = x % 10;
    result = result * 10 + num;
    x = parseInt(x / 10);
  }

  return result;
}
