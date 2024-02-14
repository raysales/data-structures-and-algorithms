/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let i = 0
    let j = i
    let len = s.length
    let subStr
    let output = ""
    
    while (i < len) {
        // skip leading spaces
        while (s[i] === " ") i++
        // covers multiple trailing spaces edge case
        if (i === len) break
        
        // find end of each word
        j = i + 1
        while (j < len && s[j] !== " ") j++
        // extract word
        subStr = s.slice(i, j)
    
        if (output === "") output = subStr
        else output = subStr + " " + output
        i = j + 1
    }
    return output
};