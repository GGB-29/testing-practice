import Calculator from '../src/calculator.js'

describe('calculator object', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });
    
    test('calculator is an object', () => {
        expect(typeof calculator).toBe('object');
    });

    test('calculator has add method', () => {
        expect(typeof calculator.add).toBe('function');
    });
});