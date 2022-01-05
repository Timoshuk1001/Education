const inputNum = document.getElementById('inputNum');
const getTry = document.getElementById('getTry');
const lastNumber = document.getElementById('lastNumber');
const lastResult = document.getElementById('lastResult');
const hotOrCold = document.getElementById('hotOrCold');
const reset = document.getElementById('reset');
const firstGame = document.getElementById('firstGame');
const secondGame = document.getElementById('secondGame');
const start1 = document.getElementById('start1');
const start2 = document.getElementById('start2');
const hello = document.getElementById('hello');

firstGame.addEventListener('click', function () {
    start1.hidden = false;
    hello.hidden = true;
})

secondGame.addEventListener('click', function (){
    start2.hidden = false;
    hello.hidden = true;
})

let randomNumber = Math.round(Math.random() * (100 - 1) + 1);

let count = 1;

getTry.addEventListener('click', function (){
    let userInput = Number(inputNum.value);
    let random = randomNumber;

    if (count === 1) {
        lastNumber.textContent = 'Предыдущие варианты: ';
    }
    lastNumber.textContent += userInput + ' ';

    if (userInput === random) {
        lastResult.textContent = 'Поздравляю! Ты угадал число за ' + count;
        if (count < 5) {
            lastResult.textContent += ' попытки!';
        } else lastResult.textContent += ' попыток!';
        hotOrCold.textContent = '';
        gameOver()
    } else if (count === 5) {
        inputNum.disabled = true;
        getTry.disabled = true;
        lastResult.textContent = 'Попытки кончились!'
        gameOver()
    } else {
        lastResult.textContent = 'Не угадал!'
        if (userInput < random) {
            hotOrCold.textContent = 'Число меньше чем загаданное!';
        } else if (userInput > random) {
            hotOrCold.textContent = 'Число больше чем загаданное!';
        }
    }
    console.log(random)
    count++;
    inputNum.value = '';
    inputNum.focus();

})

function gameOver() {
    inputNum.disabled = true;
    getTry.disabled = true;
    reset.addEventListener('click', function () {
        count = 1;
        inputNum.disabled = false;
        getTry.disabled = false;
        inputNum.value = '';
        inputNum.focus();
        lastResult.textContent = '';
        hotOrCold.textContent = '';
        lastNumber.textContent = '';
        randomNumber = Math.floor(Math.random() * 100) + 1;
    })
}


const minEl = document.getElementById('minEl');
const maxEl = document.getElementById('maxEl');
const attempts = document.getElementById('attempts');
const getTry2 = document.getElementById('getTry2');
const genNumber = document.getElementById('genNumber');
const inputPersonNum = document.getElementById('inputPersonNum');
const start = document.getElementById('start');
const lastNumber2 = document.getElementById('lastNumber2');
const lastResult2 = document.getElementById('lastResult2');
const lowOrHi2 = document.getElementById('lowOrHi2');
const reset2 = document.getElementById('reset2');

let result;
let resultArray = [];
let countGuess = 1;

getTry2.addEventListener('click', randomNumberPerson);

function randomNumberPerson() {
    const minValue = Number(minEl.value);
    const maxValue = Number(maxEl.value);
    const attemptsValue = Number(attempts.value);

    if (attemptsValue > 15 || attemptsValue < 1) {
        genNumber.textContent = 'Диапазон попыток должен быть от 1 до 15!'
    }

    if (maxValue < 0 || minValue < 0 || attemptsValue < 0) {
        genNumber.textContent = 'Отрицательные значения в диапазоне не допустимы!'
    }

    if (!Number.isInteger(maxValue) || !Number.isInteger(minValue) || !Number.isInteger(attemptsValue)) {
        genNumber.textContent = 'Принимаются только целые числа!'
    }

    if (maxValue > 200) {
        genNumber.textContent = 'Максимально значение диапазона должно быть не более 200!'
    }

    if (maxValue <= minValue) {
        genNumber.textContent = 'Некорректный ввод диапазона!';
    }

    resultArray = [minValue, maxValue, attemptsValue];

    getRandomNumber(resultArray[0], resultArray[1])
    console.log(result)
    inputPersonNum.hidden = false;
    start.hidden = false;
}

function getRandomNumber(min, max) {

    result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

let resultPerson = Math.round(minEl.value - 0.5 + Math.random() * (maxEl.value - minEl.value + 1));

start.addEventListener('click', tryGuess);

function tryGuess() {
    let value = Number(inputPersonNum.value);

    if (count === 1) {
        lastNumber2.textContent = 'Предыдущие варианты: ';
    }
    lastNumber2.textContent += value + ' ';

    if (value === result) {
        lastResult2.textContent = 'Поздравляю! Ты угадал число за ' + count;
        if (count < 5) {
            lastResult2.textContent += ' попытки!';
        } else lastResult2.textContent += ' попыток!';
        lowOrHi2.textContent = '';
        gameOverPerson()
    } else if (count === 5) {
        inputPersonNum.disabled = true;
        getTry2.disabled = true;
        lastResult2.textContent = 'Попытки кончились!';
        gameOverPerson()
    } else {
        lastResult2.textContent = 'Не угадал!'
        if (value < result) {
            lowOrHi2.textContent = 'Число меньше чем загаданное!';
        } else if (value > result) {
            lowOrHi2.textContent = 'Число больше чем загаданное!';
        }
    }
    count++;
    inputNum.value = '';
    inputNum.focus();
}

function gameOverPerson() {
    inputPersonNum.disabled = true;
    getTry2.disabled = true;
    start2.disabled = true;
    start1.disabled = true;
    minEl.disabled = true;
    maxEl.disabled = true;
    attempts.disabled = true;
    start.disabled = true;
    reset2.addEventListener('click', function () {
        count = 1;
        inputPersonNum.disabled = false;
        getTry2.disabled = false;
        start2.disabled = false;
        start1.disabled = false;
        minEl.disabled = false;
        maxEl.disabled = false;
        attempts.disabled = false;
        start.disabled = false;
        inputPersonNum.value = '';
        minEl.value = '';
        maxEl.value = '';
        attempts.value = '';
        minEl.focus();
        lastResult2.textContent = '';
        lowOrHi2.textContent = '';
        lastNumber2.textContent = '';
        randomNumber = Math.floor(Math.random() * 100) + 1;
    })
}


const endGame = document.getElementById('gameOver');

endGame.addEventListener('click', function (){
    start1.hidden = true;
    start2.hidden = true;
    hello.hidden = false;
})


module.exports = {
    randomNumberPerson,
    tryGuess
}