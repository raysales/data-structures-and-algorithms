/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
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
};