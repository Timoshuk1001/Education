// Функции

// 1.	Получить строковое название дня недели по номеру дня. 

function getStringDayNumber(number) {
  let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return week[number - 1];
}

// 2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function getDistance(x1, x2, y1, y2) {
  let sqr1 = (x2 - x1) ** 2;
  let sqr2 = (y2 - y1) ** 2;

  return Math.sqrt(sqr1 + sqr2);
}

// 3.	Вводим число(0-999), получаем строку с прописью числа.

function convertToString(number) {
  const numbers = {
    'nine hundred': 900,
    'eight hundred': 800,
    'seven hundred': 700,
    'six hundred': 600,
    'five hundred': 500,
    'four hundred': 400,
    'three hundred': 300,
    'two hundred': 200,
    'one hundred': 100,
    ninety: 90,
    eighty: 80,
    seventy: 70,
    sixty: 60,
    fifty: 50,
    forty: 40,
    thirty: 30,
    twenty: 20,
    nineteen: 19,
    eighteen: 18,
    seventeen: 17,
    sixteen: 16,
    fifteen: 15,
    fourteen: 14,
    thirteen: 13,
    twelve: 12,
    eleven: 11,
    ten: 10,
    nine: 9,
    eight: 8,
    seven: 7,
    six: 6,
    five: 5,
    four: 4,
    three: 3,
    two: 2,
    one: 1,
  };

  if (number === 0) return 'zero';

  let result = '';

    while (number > 0) {
      for (key in numbers) {
        if (numbers[key] <= number) {
          result += '' + key + ' ';
          number -= numbers[key];
          break;
        }
      }
    }

    return result;
}

console.log(convertToString(356))

// 4.	Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

function stringToNumberName(string) {
  const object = {
    hundred: 100,
    ninety: 90,
    eighty: 80,
    seventy: 70,
    sixty: 60,
    fifty: 50,
    forty: 40,
    thirty: 30,
    twenty: 20,
    nineteen: 19,
    eighteen: 18,
    seventeen: 17,
    sixteen: 16,
    fifteen: 15,
    fourteen: 14,
    thirteen: 13,
    twelve: 12,
    eleven: 11,
    ten: 10,
    nine: 9,
    eight: 8,
    seven: 7,
    six: 6,
    five: 5,
    four: 4,
    three: 3,
    two: 2,
    one: 1,
    zero: 0,
  }

  if(object[string]) return object[string];

  const stringArray = string.split(' ');

  let result = 0;

  if(stringArray.length <= 2 && stringArray[1] !== 'hundred') {
    for(let i = 0; i < stringArray.length; i++){
      result += object[stringArray[i]];
    }

    return result;
  }

  for(let i = 1; i < stringArray.length; i++){
    if(i === 1) {
      result = object[stringArray[0]] * object[stringArray[i]];
      continue;
    }
    result += object[stringArray[i]];
  }

  return result;

}

console.log(stringToNumberName('three hundred fifty six'));

// 5.	Для задания 2 расширить диапазон до 999 миллиардов



// 6.	Для задания 3 расширить диапазон до 999 миллиардов

// function stringToNumberNameBillion(string) {
//   const object = {
//     billion: 1000000000,
//     million: 1000000,
//     thousand: 1000,
//     hundered: 100,
//     ninety: 90,
//     eighty: 80,
//     seventy: 70,
//     sixty: 60,
//     fifty: 50,
//     forty: 40,
//     thirty: 30,
//     twenty: 20,
//     nineteen: 19,
//     eighteen: 18,
//     seventeen: 17,
//     sixteen: 16,
//     fifteen: 15,
//     fourteen: 14,
//     thirteen: 13,
//     twelve: 12,
//     eleven: 11,
//     ten: 10,
//     nine: 9,
//     eight: 8,
//     seven: 7,
//     six: 6,
//     five: 5,
//     four: 4,
//     three: 3,
//     two: 2,
//     one: 1,
//     zero: 0,
//   }
//
//   if(object[string]) return object[string];
//
//   const stringArray = string.split(' ');
//
//   let result = 0;
//
//   if(stringArray.length <= 2 && stringArray[1] !== 'billion') {
//     for(let i = 0; i < stringArray.length; i++){
//       result += object[stringArray[i]];
//     }
//
//     return result;
//   }
//
//   if(stringArray.length <= 2 && stringArray[1] !== 'million') {
//     for(let i = 0; i < stringArray.length; i++){
//       result += object[stringArray[i]];
//     }
//
//     return result;
//   }
//
//   if(stringArray.length <= 2 && stringArray[1] !== 'thousand') {
//     for(let i = 0; i < stringArray.length; i++){
//       result += object[stringArray[i]];
//     }
//
//     return result;
//   }
//
//   if(stringArray.length <= 2 && stringArray[1] !== 'hundred') {
//     for(let i = 0; i < stringArray.length; i++){
//       result += object[stringArray[i]];
//     }
//
//     return result;
//   }
//
//   for(let i = 1; i < stringArray.length; i++){
//     if(i === 1) {
//       result = object[stringArray[0]] * object[stringArray[i]];
//       continue;
//     }
//     result += object[stringArray[i]];
//   }
//
//   return result;
//
// }

module.exports = {
  getStringDayNumber,
  getDistance,
  convertToString,
  stringToNumberName
}