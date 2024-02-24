/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length
    let m = text2.length
    const dp = new Array(n + 1).fill()
                .map(() => Array(m + 1  ).fill(-1));   
    
    return dfs(n, m, text1, text2, dp)
};

const dfs = (i, j, s, t, dp) => {
    // base case
    if (i === 0 || j === 0) return 0
    
    //console.log({j})
    if (dp[i][j] !== -1) return dp[i][j]
    // chars at i & j are the same
    if (s[i - 1] === t[j - 1]) 
        return dp[i][j] = 1 + dfs(i - 1, j - 1, s, t, dp)
    
    // chars at i & j differ
    return dp[i][j] = Math.max(dfs(i -1, j, s, t, dp), dfs(i, j - 1, s, t, dp))
}