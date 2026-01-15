import capitalize from '../src/capitalize.js';

describe('capitalize function', () => {
    test('capitalize is a function', () => {
        expect(typeof capitalize).toBe('function');
    });

    test('capitalizes first letter of lowercase word', () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    test('does not change the rest of the string', () => {
        expect(capitalize('javaScript')).toBe('JavaScript');
    });

    test('works with a single character', () => {
        expect(capitalize('a')).toBe('A');
    });
});