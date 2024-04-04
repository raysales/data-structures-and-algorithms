/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
   const arrOutput = []
    
    for ( let arrCurInterval of intervals ) {
        
        // push cur interval whenever it is before new interval
        if ( arrCurInterval[ 1 ] < newInterval[ 0 ] ) {
            arrOutput.push( arrCurInterval )
            
        // push new interval whenever it is before cur interval but then
        // reassign new interval to cur interval for future comparisons
        } else if ( newInterval[ 1 ] < arrCurInterval[ 0 ] ) {
            arrOutput.push( newInterval )
            newInterval = arrCurInterval
        
        // merge intervals w/ start times based on min of both intervals &
        // end times based on max of their end times
        } else {
            newInterval[ 0 ] = Math.min( newInterval[ 0 ], arrCurInterval[ 0 ] )
            newInterval[ 1 ] = Math.max( newInterval[ 1 ], arrCurInterval[ 1 ] )
        }
    }
    // at end of input traversal we need to push reassigned new interval
    arrOutput.push( newInterval )
    
    return arrOutput 
};