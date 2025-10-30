/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let lo = 1
    let hi = Math.max(...piles)

    // binary search based on counting hours per pile
    while ( lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2)
        let hoursEating = 0
        for (const pile of piles) {
            hoursEating += Math.ceil(pile / mid)
        }
        if (hoursEating <= h) hi = mid
        else lo = mid + 1
    }
    return lo
};