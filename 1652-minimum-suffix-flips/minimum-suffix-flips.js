/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let flipCount = 0;
    let currentState = '0'; // Represents the effect of previous flips (0 or 1)
    
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== currentState) {
            flipCount++;
            currentState = currentState === '0' ? '1' : '0'; // Toggle the current state
        }
    }
    
    return flipCount;
}