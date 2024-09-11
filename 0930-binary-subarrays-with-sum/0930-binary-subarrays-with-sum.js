/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    
    const subArrsLessEqGoal = (nums, goal) => {
        if (goal < 0) return 0
        
        let leftIdx = 0, winSum = 0, cnt = 0
        for (rtIdx = 0; rtIdx < nums.length; rtIdx++) {
            winSum += nums[rtIdx]
            // catch up when winSum exceeds goal
            while (winSum > goal) {
                winSum -= nums[leftIdx++]
            }
            // accumulate win size which reps # of subArrs <= goal
            cnt += (rtIdx - leftIdx + 1)
        }
        return cnt
    }
    
    return subArrsLessEqGoal(nums, goal) - subArrsLessEqGoal(nums, goal - 1) 
};