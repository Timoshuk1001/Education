const {
    randomNumberPerson,
    tryGuess } = require('./script')
const element = document.getElementById('inputPersonNum');

describe('randomNumberPerson', function () {
    test('valid input', function () {
        expect(randomNumberPerson(1, 5, 20)).toEqual('Диапазон попыток должен быть от 1 до 15!');
    });
});