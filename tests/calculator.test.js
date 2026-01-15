import calculator from '../src/calculator.js'

describe('calculator object', () => {
    test('calculator is an object', () => {
        expect(typeof calculator).toBe('object');
    });

    test('calculator has add method', () => {
        expect(typeof calculator.add).toBe('function');
    });
});