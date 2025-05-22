/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    const quickSort = (nums, left = 0, right = nums.length - 1) => {
        /* 
          base case when subarray has 0 or 1 elements, return
          select pivot and partition array
          recursively sort left partition
          recursively sort right partition
        */
        
        if (left >= right) return nums  // base case: subarray of size 0 or 1
        
        const pivotIdx = getPivotIdx(nums, left, right);  // partition and get pivot idx
        quickSort(nums, left, pivotIdx - 1)  // sort left partition
        quickSort(nums, pivotIdx + 1, right) // sort right partition
        
        return nums
    };

    // Helper function to select pivot and partition the array
    const getPivotIdx = (nums, left, right) => {
        /*
          randomly select pivot index and swap with last element
          initialize pointer i to track position for elements < pivot
          iterate through array:
             - if current element < pivot, increment i and swap
          place pivot in correct position
          return pivot's final idx
        */
        
        // random pivot selection to avoid worst-case O(n^2)
        const randomIdx = Math.floor(Math.random() * (right - left + 1)) + left;
        [nums[randomIdx], nums[right]] = [nums[right], nums[randomIdx]];
        
        const pivotValue = nums[right]  // pivot value is now at the end
        let i = left - 1  // ptr for elements less than pivot
        
        // partitioning loop
        for (let j = left; j < right; j++) {
            if (nums[j] < pivotValue) {
                i++;
                [nums[i], nums[j]] = [nums[j], nums[i]];  // swap elements
            }
        }
        
        // place pivot in correct position
        [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];
        return i + 1  // return pivot's final
    }

    return quickSort(nums)  // init sorting process
}