/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxSeqLen = 0
    let curSeqLen = 0
    let curNum
    
    // insert input into Set
    const numsSet = new Set(nums)
    for (let i = 0; i < nums.length; i++) {
        numsSet.add(nums[i])
    }
    
    for (const num of numsSet) {
        // only track seqs that don't have #s preceding it since
        // we need to find the starting # of sequence
        if (!numsSet.has(num - 1)) {
            curNum = num
            curSeqLen = 1
            
            // keep tracking curSeq
            while (numsSet.has(curNum + 1)) {
                curSeqLen++
                curNum++
            }
            maxSeqLen = Math.max(maxSeqLen, curSeqLen)
        }
    }
    return maxSeqLen
};