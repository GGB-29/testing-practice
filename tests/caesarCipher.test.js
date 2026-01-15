import caesarCipher from '../src/caesarCipher';

describe('caesar cipher function', () => {
        test('caesar cipher is a function', () => {
            expect(typeof caesarCipher).toBe('function');
        });
});