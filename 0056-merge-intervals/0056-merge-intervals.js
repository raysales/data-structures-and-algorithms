/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 1) return intervals
    
    // sort based on start time
    intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0])
    
    const outputArr = []
    let prevInterval = intervals[0]
    outputArr.push(prevInterval)
    
    // Modify forEach to start from index 1
    intervals.slice(1).forEach( (interval) => {
        let prevStart = prevInterval[0]
        let prevEnd = prevInterval[1]
        let curStart = interval[0]
        let curEnd = interval[1]
        
        // overlapping interval [1,3],[2,6]
        if (curStart <= prevEnd) {
            prevInterval[1] = Math.max(prevEnd, curEnd)
        } else { //[8,10],[15,18]
            prevInterval = interval
            outputArr.push(prevInterval)
        }
    })
    return outputArr
}