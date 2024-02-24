/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length
    let m = text2.length
    const dp = new Array(n).fill()
                .map(() => Array(m).fill(-1));   
    
    return dfs(n - 1, m - 1, text1, text2, dp)
};

const dfs = (i, j, s, t, dp) => {
    // base case
    if (i < 0 || j < 0) return 0
    
    //console.log({j})
    if (dp[i][j] !== -1) return dp[i][j]
    // chars at i & j are the same
    if (s[i] === t[j]) 
        return dp[i][j] = 1 + dfs(i - 1, j - 1, s, t, dp)
    
    // chars at i & j differ
    return dp[i][j] = Math.max(dfs(i -1, j, s, t, dp), dfs(i, j - 1, s, t, dp))
}