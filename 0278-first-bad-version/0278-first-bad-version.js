/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let mid
        let lo = 1
        let hi = n
        
        while (lo < hi) {
            mid = Math.floor(lo + (hi - lo) / 2)
            if (isBadVersion(mid)) hi = mid
            else lo = mid + 1
        }
        return lo
    };
};