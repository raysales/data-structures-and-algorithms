/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {

    // Count character frequencies
    const charCntArr = new Array(26).fill(0);
    for (const char of s) {
        charCntArr[char.charCodeAt(0) - 97]++;
    }

    // Find the maximum frequency and the corresponding character
    let maxCharCnt = 0;
    let maxChar = 0;
    for (let i = 0; i < 26; i++) {
        if (charCntArr[i] > maxCharCnt) {
            maxCharCnt = charCntArr[i];
            maxChar = i;
        }
    }

    if (maxCharCnt > Math.floor((s.length + 1) / 2)) {
        return "";
    }

    // Create the output array
    const output = new Array(s.length);
    let idx = 0;

    // Fill the array with the most frequent character
    while (charCntArr[maxChar] > 0) {
        output[idx] = String.fromCharCode(maxChar + 97);
        idx += 2;
        if (idx >= s.length) idx = 1;
        charCntArr[maxChar]--;
    }

    // Fill the remaining positions
    for (let i = 0; i < 26; i++) {
        while (charCntArr[i] > 0) {
            if (idx >= s.length) idx = 1;
            output[idx] = String.fromCharCode(i + 97);
            idx += 2;
            charCntArr[i]--;
        }
    }

    return output.join('');
}