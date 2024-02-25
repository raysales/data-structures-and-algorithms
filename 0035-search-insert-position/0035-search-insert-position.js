/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
 0 1 2 3
[1,3,5,6], target = 5
     l
     m
       h
*/
var searchInsert = function(nums, target) {
    let output
    let lo = 0
    let hi = nums.length - 1
    let mid
    
    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2)
        if (target === nums[mid]) return mid
        else if ( target > nums[mid]) lo = mid + 1
        else hi = mid - 1
    }
    return lo
};