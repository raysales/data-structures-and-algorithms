/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    const reverse = (left, right) => {
        let temp
        while (left < right) {
            temp = s[left]
            s[left] = s[right]
            s[right--] = temp
            left++
        }
    }
    
    // reverse input
    reverse(0, s.length - 1)
    
    let startIdx = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " "){
            reverse(startIdx, i - 1)
            startIdx = i + 1
        }
    }
    // reverse last word
    reverse(startIdx, s.length - 1)
    return s
};