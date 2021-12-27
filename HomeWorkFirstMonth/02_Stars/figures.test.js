const {
    figureOne,
    figureTwo,
    figureThree,
    figureFour,
    figureFive,
    figureSix,
    figureSeven,
    figureEight,
    figureNine,
    kek } = require('./figures')

describe('figureOne', function () {
    test('draw figure one', function () {
        expect(figureOne(7)).toEqual(' *  *  *  *  *  *  * \n' +
            ' *  *  *  *  *  *  * \n' +
            ' *  *  *  *  *  *  * \n' +
            ' *  *  *  *  *  *  * \n' +
            ' *  *  *  *  *  *  * \n' +
            ' *  *  *  *  *  *  * \n' +
            ' *  *  *  *  *  *  * \n');
    });
});

describe('figureTwo', function () {
    test('draw figure two', function () {
        expect(figureTwo(7)).toEqual(' *  *  *  *  *  * * \n' +
        ' *                * \n' +
        ' *                * \n' +
        ' *                * \n' +
        ' *                * \n' +
        ' *                * \n' +
        ' *  *  *  *  *  * * \n');
    });
});