/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let maxLen = 0
    const dp = new Array(nums.length).fill(1)
    //console.log({dp})
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    //console.log({dp})
    return Math.max(...dp)
};