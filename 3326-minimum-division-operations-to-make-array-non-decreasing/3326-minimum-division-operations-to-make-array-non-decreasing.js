/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;

    function getProperDivisors(num) {
        const divisors = [];
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisors.push(i);
                if (i !== num / i) divisors.push(num / i);
            }
        }
        return divisors.sort((a, b) => b - a); // Sort in descending order
    }

    let operations = 0;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] <= nums[i + 1]) continue;

        const divisors = getProperDivisors(nums[i]);
        let divided = false;

        for (const divisor of divisors) {
            if (Math.floor(nums[i] / divisor) <= nums[i + 1]) {
                nums[i] = Math.floor(nums[i] / divisor);
                operations++;
                divided = true;
                break;
            }
        }

        if (!divided) return -1;
    }

    return operations;
}

// Test cases
//console.log(minOperations([288, 7])); // Should output: 1
//console.log(minOperations([9,10,18,20,2])); // Should output: -1