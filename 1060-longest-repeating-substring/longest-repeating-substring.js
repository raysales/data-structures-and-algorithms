/**
 * @param {string} s
 * @return {number}
 */
function longestRepeatingSubstring(s) {
    const n = s.length;
    const dp = new Array(n).fill().map(() => new Array(n).fill(-1)); // Memoization table
    let maxLen = 0; // Track the length of the longest repeating substring

    // Recursive function with memoization
    function findCommonLength(i, j) {
        if (i >= n || j >= n || s[i] !== s[j]) {
            return 0; // Base case: stop recursion
        }
        if (dp[i][j] !== -1) {
            return dp[i][j]; // Return memoized result
        }
        // Recursive case: compute and memoize the result
        dp[i][j] = 1 + findCommonLength(i + 1, j + 1);
        return dp[i][j];
    }

    // Compare all pairs of starting indices (i, j)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const commonLen = findCommonLength(i, j); // Find common substring length
            maxLen = Math.max(maxLen, commonLen); // Update maxLen
        }
    }

    return maxLen; // Return the length of the longest repeating substring
}

/* Example usage:
console.log(longestRepeatingSubstring("abcd")); // Output: 0
console.log(longestRepeatingSubstring("abbaba")); // Output: 2
console.log(longestRepeatingSubstring("aabcaabdaab")); // Output: 3
*/