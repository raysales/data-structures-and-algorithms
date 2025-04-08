/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i = 0, j = 0;
    const result = [];
    
    while (i < firstList.length && j < secondList.length) {
        const [start1, end1] = firstList[i];
        const [start2, end2] = secondList[j];
        
        const overlapStart = Math.max(start1, start2);
        const overlapEnd = Math.min(end1, end2);
        
        // intervals overlap when max start < min end
        if (overlapStart <= overlapEnd) {
            result.push([overlapStart, overlapEnd]);
        }
        
        // move earlier ending ptr
        if (end1 < end2) {
            i++;
        } else {
            j++;
        }
    }
    
    return result;
};