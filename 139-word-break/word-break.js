/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 /*
 To make the first approach more efficient, you can:

Use a Set for wordDict:
Convert wordDict into a Set for 
O(1) lookups when checking if a prefix exists.
This reduces the time complexity of checking if a word is in wordDict from 
O(k) to O(1).

Limit the Prefix Length:
Only check prefixes of s that are no longer than the maximum word length in wordDict.
This avoids unnecessary comparisons for prefixes that are too long to match any word in wordDict
*/
function wordBreak(s, wordDict, memo = {}) {
  if (s in memo) return memo[s]; // Memoization check
  if (s === '') return true; // Base case

  const wordSet = new Set(wordDict); // Convert wordDict to a Set for O(1) lookups
  const maxWordLength = Math.max(...wordDict.map(word => word.length)); // Get max word length

  for (let i = 1; i <= s.length && i <= maxWordLength; i++) {
    const prefix = s.substring(0, i); // Extract prefix
    if (wordSet.has(prefix) && wordBreak(s.substring(i), wordDict, memo)) {
      memo[s] = true; // Memoize result
      return true;
    }
  }

  memo[s] = false; // Memoize result
  return false;
}