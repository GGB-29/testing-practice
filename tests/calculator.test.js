import Calculator from '../src/calculator.js'

describe('calculator object', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('Calculator class exists', () => {
        expect(typeof calculator).toBe('object');
    });

    test('calculator is an instance of Calculator', () => {
        expect(calculator).toBeInstanceOf(Calculator);
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

    test('adds two numbers', () => {
        expect(calculator.add(2, 5)).toBe(7);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(2, 5)).toBe(-3);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(2, 5)).toBe(10);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(12, 3)).toBe(4);
    });

    test('dividing by zero returns infinity', () => {
        expect(calculator.divide(12, 0)).toBe(Infinity);
    });
});