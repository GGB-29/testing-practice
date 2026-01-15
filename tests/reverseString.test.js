import reverseString from '../src/reverseString';

describe('reverse string function', () => {
    test('is a function', () => {
        expect(typeof reverseString).toBe('function');
    });

    test('reverses a string', () => {
        expect(reverseString("Hello world")).toBe("dlrow olleH");
    })

    test('reverses different strings', () => {
        expect(reverseString("Hello there")).toBe("ereht olleH");
    });
});