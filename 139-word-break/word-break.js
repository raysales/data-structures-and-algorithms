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
/* BU DP traversing from the end of input where base case of dp after length of
   input string is empty & set to true.  Compare str from each idx to word in dict
   as well as dp val at idx after any word comparisons.  if dp at idx 0 is true
   then return true
*/
    const wordSet = new Set(wordDict)
    const dp = new Array(s.length + 1).fill(false)
    dp[s.length] = true

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j <= s.length; j++) {
            let substr = s.substring(i, j)
            if (wordSet.has(substr) && dp[j]) {
                dp[i] = true
                break
            }
        }
    }
    return dp[0]
}

/*
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
*/
/*
//  s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
//               ^
//        
//c
c
ca
cat
   s
   sa
   san
   sand
        o
        og
   sando
   sandog
cats
   a
   an
   and
      o
      og
   ando
   andog
catsa
catsan
catsand
catsando
catsandog
     
//helper(idx)
//base idx is over the length of string 
// for loop i :idx to length of string
//   let s =  concat(idx)
// if (s is in dictionary)
//      if (helper(i+1))
//          return true
// return false
*/