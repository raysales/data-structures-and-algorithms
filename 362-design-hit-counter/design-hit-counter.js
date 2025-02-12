
class HitCounter {
    constructor() {
        // Initialize a fixed-size array for 300 seconds
        this.hits = new Array(300).fill(0); // Stores hit counts
        this.timestamps = new Array(300).fill(0); // Stores corresponding timestamps
    }

    /**
     * Records a hit at the given timestamp.
     * @param {number} timestamp
     */
    hit(timestamp) {
        const index = timestamp % 300; // Map timestamp to an index using modulo
        if (this.timestamps[index] !== timestamp) {
            // If this bucket is outdated, reset it
            this.hits[index] = 0;
            this.timestamps[index] = timestamp;
        }
        // Increment hit count for this second
        this.hits[index]++;
    }

    /**
     * Returns the number of hits in the past 5 minutes (300 seconds).
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp) {
        let totalHits = 0;
        for (let i = 0; i < 300; i++) {
            // Only count hits within the last 300 seconds
            if (timestamp - this.timestamps[i] < 300) {
                totalHits += this.hits[i];
            }
        }
        return totalHits;
    }
}

/* Example usage:
const hitCounter = new HitCounter();
hitCounter.hit(1);       // Record a hit at timestamp 1
hitCounter.hit(2);       // Record a hit at timestamp 2
hitCounter.hit(3);       // Record a hit at timestamp 3
console.log(hitCounter.getHits(4));   // Get hits at timestamp 4, should return 3
hitCounter.hit(300);     // Record a hit at timestamp 300
console.log(hitCounter.getHits(300)); // Get hits at timestamp 300, should return 4
console.log(hitCounter.getHits(301)); // Get hits at timestamp 301, should return 3
*/

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */