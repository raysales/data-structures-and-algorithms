/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u'])
    //console.log({vowelsSet})
    
    let maxVowelsCnt = 0
    let vowelsCnt = 0
    for (let i = 0; i < k; i++) {
        if (vowelsSet.has(s[i])) vowelsCnt++
    }
    maxVowelsCnt = Math.max(maxVowelsCnt, vowelsCnt)
    //console.log({maxVowelsCnt})
    
    for (let j = k; j < s.length; j++) {
        if (vowelsSet.has(s[j])) vowelsCnt++
        if (vowelsSet.has(s[j - k])) vowelsCnt--
        maxVowelsCnt = Math.max(maxVowelsCnt, vowelsCnt)
    }
    return maxVowelsCnt
};