/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const output = new Array(nums1.length).fill(-1)
    // create map of nums1 indices
    const nums1Map = new Map()
    nums1.forEach((el, idx) => {nums1Map.set(el, idx)})
    //console.log({nums1Map})
    // iterate nums2 to find next greater element only for those #s
    // that exist in nums1   
    for (let i = 0; i < nums2.length - 1; i++) {
        let prevNum = nums2[i]
        if (!nums1Map.has(prevNum))continue
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[j] > prevNum) {
                let nums1Idx = nums1Map.get(prevNum)
                output[nums1Idx] = nums2[j]
                break
            }
        }
    }
    return output
};