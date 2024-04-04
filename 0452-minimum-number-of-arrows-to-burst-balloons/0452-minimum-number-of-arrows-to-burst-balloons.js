/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    /*
    // sort input points by ending time
    points.sort((a, b) => a[1] - b[1])
    //console.log(points)
    
    // initialize arrows to 1 since input won't be empty
    let arrows = 1
    
    // set prev end time to first interval
    let prevEnd = points[0][1]
    
    // iterate through points comparing for any any overlaps w/ current start time vs
    // prev end time.  if current start time is after prev end time then increment
    // arrows count, then reassigning prev end time to current end time
    for (let point of points) {
        if (point[0] > prevEnd) {
            arrows++
            prevEnd = point[1]
        }
    }
    return arrows
    */
    
    // sort points asc by start time
    points.sort((a, b) => a[0] - b[0])
    //console.log(points)
    
    // initialize arrows to 1 since guaranteed at least one balloon
    let arrows = 1
    
    // initialize prev interval to first one
    let prev = points[0]
    
    // iterate through intervals starting on 1 index & destructure start & end times
    for (let [curStart, curEnd] of points.slice(1, points.length)) {
        //console.log(curStart + ", " + curEnd)
             
    // check if start of cur interval is after prev end time, if so then increment
    // arrows by 1 & reassign prev to cur interval
    if (curStart > prev[1]) {
        arrows++
        //console.log({arrows})
        prev = [curStart, curEnd]
        //console.log({prev})
    } 
    // else prev end time is updated to min of prev end or cur end time
    else prev[1] = Math.min(prev[1], curEnd)
    //console.log({prev})}
    }    
    return arrows
};