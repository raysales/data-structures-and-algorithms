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
    
    for (let j = 0; j <= m; j++) dp[0][j] = 0
    for (let i = 0; i <= n; i++) dp[i][0] = 0
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1[i - 1] === text2[j - 1]) 
                dp[i][j] = 1 + dp[i - 1][j - 1]

            // chars at i & j differ
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        }
    }
    
    return dp[n][m]
};