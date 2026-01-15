import analyzeArray from "../src/analyzeArray";

describe('analyzeArray', () => {
    test('should return correct average, min, max, and length for a normal array', () => {
        const arr = [1, 8, 3, 4, 2, 6];
        const result = analyzeArray(arr);
        expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
        });
    });

    test('should handle an array with one element', () => {
        const arr = [10];
        const result = analyzeArray(arr);
        expect(result).toEqual({
        average: 10,
        min: 10,
        max: 10,
        length: 1
        });
    });

    test('should handle an empty array', () => {
        const arr = [];
        const result = analyzeArray(arr);
        expect(result).toEqual({
        average: 0,
        min: undefined,
        max: undefined,
        length: 0
        });
    });

    test('should handle negative numbers', () => {
        const arr = [-5, -1, -10, -3];
        const result = analyzeArray(arr);
        expect(result).toEqual({
        average: -4.75,
        min: -10,
        max: -1,
        length: 4
        });
    });

    test('should handle decimal numbers', () => {
        const arr = [1.5, 2.5, 3.5];
        const result = analyzeArray(arr);
        expect(result).toEqual({
        average: 2.5,
        min: 1.5,
        max: 3.5,
        length: 3
        });
    });
});
