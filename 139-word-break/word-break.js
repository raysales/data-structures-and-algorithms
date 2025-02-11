/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 /*
Recommended Approach
For the Word Break problem, the second approach (iterating over s) is recommended because:

Efficiency:
The time complexity 
O(n⋅m) is better than 
O(n⋅k) when m (maximum word length) is much smaller than k (number of words in wordDict).

In the worst case, 
m=20 and k=1000, so O(n⋅m) is significantly faster.

Scalability:
This approach scales better for larger inputs, especially when wordDict is large.

Simplicity:
The logic is straightforward: generate prefixes and check if they exist in wordDict.
*/
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict); // Convert wordDict to a Set for O(1) lookups
  const maxWordLength = Math.max(...wordDict.map(word => word.length)); // Get max word length
  const dp = new Array(s.length + 1).fill(false); // DP array
  dp[0] = true; // Base case: empty string can always be segmented

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // Check if the prefix s[j..i-1] exists in wordDict
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true; // Mark dp[i] as true if a valid segmentation is found
        break; // No need to check further prefixes for this i
      }
    }
  }

  return dp[s.length]; // The result for the entire string
}