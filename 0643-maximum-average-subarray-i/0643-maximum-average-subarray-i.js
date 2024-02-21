/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAvg = -Infinity
    let avg
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    avg = sum / k
    maxAvg = Math.max(maxAvg, avg)
    
    for (let j = k; j < nums.length; j++) {
        sum += nums[j]
        sum -= nums[j-k]
        avg = sum / k
        maxAvg = Math.max(maxAvg, avg)
    }
    return maxAvg
};