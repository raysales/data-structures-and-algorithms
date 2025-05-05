/**
 * @param {number} n
 * @return {number}
 */
/* TC = 32 or const, while SC = const
var hammingWeight = function(n) {
    let cnt = 0
    let mask = 1
    for (let i = 0; i < 32; i++) {
        if ((n & mask) !== 0) cnt++
        mask <<= 1
    }
    return cnt
};
*/
// only process LSB via n & (n-1) which flips it to 0
// while n > 0 increment cnt right away & then flip LSB
var hammingWeight = function(n) {
    let cnt = 0
    while (n > 0) {
        cnt++
        n &= (n - 1)
    }
    return cnt
    
};