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

    test('calculator has subtract method', () => {
        expect(typeof calculator.subtract).toBe('function');
    });

    test('calculator has multiply method', () => {
        expect(typeof calculator.multiply).toBe('function');
    });
    
    test('calculator has divide method', () => {
        expect(typeof calculator.divide).toBe('function');
    });
});