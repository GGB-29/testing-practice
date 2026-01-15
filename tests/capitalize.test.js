import capitalize from '../src/capitalize.js';

test('capitalize is a function', () => {
    expect(typeof capitalize).toBe('function');
});

test('capitalizes first letter of lowercase word', () => {
    expect(capitalize("hello")).toBe("Hello");
});