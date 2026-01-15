export default function reverseString(string) {
    let newString = '';
    for (const char of string) {
        newString = char + newString;
    }
    return newString;
}