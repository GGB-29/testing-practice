export default function caesarCipher(string, shift) {
    const normalizedShift = shift % 26;

    return string
            .split('')
            .map(char => {
                const code = char.charCodeAt(0);

                if (code >= 97 && code <= 122) {
                    return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
                }
                
                if (code >= 65 && code <= 90) {
                    return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
                }
                return char;
                }
            )
            .join('');
}