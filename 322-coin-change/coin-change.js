/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    // traverse dp array from smallest amt of 1 to actual amt
    for (let curAmt = 1; curAmt <= amount; curAmt++) {
        // check each coin's branches for min coins needed
        for (coin of coins) {
            // only valid if coin <= curAmt
            if (coin <= curAmt)
                dp[curAmt] = Math.min(dp[curAmt], dp[curAmt - coin] + 1)
        }
    }
    // check if amount was actually feasible
    return dp[amount] === Infinity ? - 1 : dp[amount] 
};