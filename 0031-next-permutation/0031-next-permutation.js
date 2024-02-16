/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
               10
                  8
                    7
         6            5
      3                 3
   1 
   

         4     4
       3         3
     2             2
   1                 1
*/
var nextPermutation = function(nums) {
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start++], nums[end--]] = [nums[end], nums[start]]
        }
        return nums
    }
    
    const swap = (left, right) => {
        //[nums[left], nums[right]] = [nums[right], nums[left]]
        let tmp = nums[left]
        nums[left] = nums[right]
        nums[right] = tmp
    }
    
    // find first value that decreases from the right so before the peak
    let n = nums.length
    let inflectionIdx = -1
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            inflectionIdx = i
            break
        }
    }
    
    // always decreasing edge case
    if (inflectionIdx === -1) {
        return reverse(0, n - 1)
    }
    
    // swap inflectionIdx value w/ the first val that is greater than it from the right
    for (let j = n - 1; j > inflectionIdx; j--) {
        if (nums[j] > nums[inflectionIdx]) {
            swap(inflectionIdx, j)
            break
        }
    }
    
    // reverse tail from peak to end of input
    return reverse(inflectionIdx + 1, n - 1)
};