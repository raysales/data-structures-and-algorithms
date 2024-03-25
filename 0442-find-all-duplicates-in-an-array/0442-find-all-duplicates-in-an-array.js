/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
    Traverse input marking value at idx - 1 offset w/ a negative to associate or flag that the # was already seen.  If the # is negative then that means it's a duplicate so push it into output.
*/
var findDuplicates = function(nums) {
    const output = []
    let absNum
    for (const num of nums) {
        absNum = Math.abs(num)
        if (nums[absNum - 1] < 0) output.push(absNum)
        nums[absNum - 1] = -(nums[absNum - 1])
    }
    return output
};