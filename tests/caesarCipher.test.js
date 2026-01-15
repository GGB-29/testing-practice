import caesarCipher from '../src/caesarCipher';

describe('caesar cipher function', () => {
        test('caesar cipher is a function', () => {
            expect(typeof caesarCipher).toBe('function');
        });

        test('shifts lowercase letters', () => {
            expect(caesarCipher('abc', 1)).toBe('bcd');
        });

        test('shifts uppercase letters', () => {
            expect(caesarCipher('ABC', 1)).toBe('BCD')
        });

        test('wraps from z to a', () => {
            expect(caesarCipher('xyz', 3)).toBe('abc');
        });

        test('wraps uppercase letters', () => {
            expect(caesarCipher('XYZ', 3)).toBe('ABC');
        });

        test('preserves letter case', () => {
            expect(caesarCipher('HeLLo', 1)).toBe('IfMMp');
        });

        test('preserves punctuation', () => {
            expect(caesarCipher('a,b,c', 1)).toBe('b,c,d');
        })

        test('handles large shifts', () => {
            expect(caesarCipher('abc', 27)).toBe('bcd');
        });
});