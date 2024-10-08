/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
/*
    // track size of matrix
    let n  = words.length
    
    // check row len vs col len
    for (let i = 0; i < n; i++) {
        // edge case check len of each word if > m return false
        if (words[i].length > n) return false
    }
    
    // iterate matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < word[row].length; j++) {
            // check if col exist & match against row
            // if col >= row or col >= word of [rows].len or 
            // word[row][col] === word[col][row]
            if (j >= n || i >= words.get(j).length() || words.get(i).charAt(j) != words.get(j).charAt(i))  return false;
        }
    }
*/
    const len = words.length
    // Iterate through each row
    for (let row = 0; row < len; row++) {
        // Iterate through each character in the row
        for (let col = 0; col < words[row].length; col++) {
            // Check if the character at words[row][col] matches the character at words[col][row]
            // Also ensure that there are enough rows and columns
            if (col >= len || row >= words[col].length || words[row][col] != words[col][row])
                return false
        }
    }
    return true
};