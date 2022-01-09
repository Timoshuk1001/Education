const { randomNumber } = require('./script')

jest.mock('../utils', () => {
    return {
        __esModule: true,
        getInputValue: jest.fn(() => true),
        setHTMLValue: jest.fn(() => true),
        resetButton: jest.fn(() => true),
        addListener: jest.fn(() => true)
    };
});

describe('randomNumber', () => {
    test('defined', () => {
        expect(randomNumber()).toBeUndefined();
    })
})
