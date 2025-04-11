/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
 // bin search from smallest cut of 1 to max ribbon length
var maxLength = function(ribbons, k) {

    const isCut = length => {
        let cutCnt = 0
        for (ribbon of ribbons) {
            // incr cutCnt by each ribbon len / len of cur cut len (mid)
            cutCnt += Math.floor(ribbon / length)
        }
        // is it possible to cut the ribbons into at least k pieces of length mid
        return cutCnt >= k
    }
    let lo = 1
    let hi = Math.max(...ribbons)

    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2)
        if (isCut(mid))
            lo = mid + 1
        else
            hi = mid - 1
    }
    // after bin search hi will pt to max ribbon length
    return hi >= 1 ? hi : 0;    
};