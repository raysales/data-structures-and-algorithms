/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    let left = 0
    let right = 0
    let count = 0
    let charSet = new Set()
    
    while (right < s.length) {
        let char = s[right]
        // Catch up phase
        while (charSet.has(char) || right - left + 1 > k) {
            charSet.delete(s[left])
            left++
        }
        // Expansion phase
        charSet.add(char)
        if (right - left + 1 === k) count++
        right++
    }
    return count
};