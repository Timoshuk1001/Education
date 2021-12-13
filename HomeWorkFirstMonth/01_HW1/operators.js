// Условные операторы

// 1.	Если а – четное посчитать а*б, иначе а+б

function getMultiplyOrSumm(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return 'incorrect input';
  
  return a % 2 === 0 ? a * b : a + b;
}

//2. Определить какой четверти принадлежит точка с координатами (x,y)

function getPosition (x, y) {
 if (typeof x !== "number" || typeof y !== "number") return 'incorrect input';

 if (x > 0 && y > 0) return 'The point belongs to the I quarter';
 if (x < 0 && y > 0) return 'The point belongs to the II quarter';
 if (x < 0 && y < 0) return 'The point belongs to the III quarter';
 if (x > 0 && y < 0) return 'The point belongs to the IV quarter';
 if (x === 0 && (y > 0 || y < 0)) return 'The point belongs to the y-axis'; 
 if ((x < 0 || x > 0) && y === 0) return 'The point belongs to the x-axis';

return 'The point belongs to the origin';
}


// 3.	Найти суммы только положительных из трех чисел

function summPositive(a, b, c) {
if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") return 'incorrect input';

let summ = 0;

if (a > 0) summ += a;
if (b > 0) summ += b;
if (c > 0) summ += c;

return summ
}

// 4.	Посчитать выражение (макс(а*б*с, а+б+с))+3

function calc(a, b, c) {
if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") { 
  return 'incorrect input';
}

let multiply = a*b*c;
let summ = a+b+c;

return multiply > summ ? multiply + 3 : summ + 3;
}


// 5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function getGrade(a){
if (typeof a !== "number") return false;

if (a > 0 && a <= 19) return 'F';
if (a >= 20 && a <= 39) return 'E';
if (a >= 40 && a <= 59) return 'D';
if (a >= 60 && a <= 74) return 'C';
if (a >= 75 && a <= 89) return 'B';
if (a >= 90 && a <= 100) return 'A';

return 'out of rating';
}

module.exports = {
    getMultiplyOrSumm,
    getPosition,
    summPositive,
    calc,
    getGrade
}