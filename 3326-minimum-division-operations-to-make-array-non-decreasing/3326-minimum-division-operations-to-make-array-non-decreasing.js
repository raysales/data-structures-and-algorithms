/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;

    // Helper function to get all proper divisors of x
    const getProperDivisors = (x) => {
        const divisors = [];
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) {
                divisors.push(i);
                if (i !== x / i) divisors.push(x / i);
            }
        }
        return divisors.sort((a, b) => b - a);  // Sort in descending order
    };

    let operations = 0;

    // Iterate from the second last element down to the first
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] <= nums[i + 1]) continue;

        const divisors = getProperDivisors(nums[i]);
        let divided = false;

        for (const divisor of divisors) {
            if (nums[i] / divisor <= nums[i + 1]) {
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

// Test case
//console.log(minOperations([288, 7]));  // Output: 1
