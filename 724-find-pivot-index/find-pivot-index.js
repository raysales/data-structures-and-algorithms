/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
//const findPivotIdx = nums => {
    // accSum - leftSum === rightSum
    let accSum = nums.reduce((curr, next) => curr + next)
    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === accSum - leftSum - nums[i]) return i 
        
        // prefix sum left
        leftSum += nums[i]
    }
    // not possible
    return -1
}