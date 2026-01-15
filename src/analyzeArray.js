export default function analyzeArray(arr) {
    return {
        "average" : calculateAverage(arr), 
        "min" : calculateMin(arr), 
        "max" : calculateMax(arr), 
        "length" : arr.length
    };
}

function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((prev, curr) => prev + curr, 0);
    return sum / arr.length;
}

function calculateMin(arr) {
    if (arr.length === 0) return undefined;
    let min = arr[0];
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

function calculateMax(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}