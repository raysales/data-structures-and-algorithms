"""
    Iterate through nums and find its proper divisors
    Find the greatest proper divisor

    Iterate through nums backwards, when we see element i-1 is greater than element i, divide element i-1 
    by its GPD. We use memoization 
    

     Runtime:
            O(n * log(m) * m/2), where m is the maximum number in nums.
"""

import math


class Solution:
    def minOperations(self, nums: List[int]) -> int:
        @cache
        def fingGpd(m):         
            for i in range(math.floor(m/2), 1, -1):
                if m % i == 0:
                    return i
            return 1

        counter = 0
        for i in range(len(nums) - 1, 0, -1):
            # How many times does this loop run?
            # In the worst case, gpd = 2 so that we make nums[i-1] smaller by the least amount.
            # In the worst case we repeat this log(nums[i-1])
            while nums[i] < nums[i - 1]:
                gpd = fingGpd(nums[i - 1])
                if gpd == 1:
                    return -1

                nums[i - 1] = nums[i - 1] / gpd
                counter += 1
        return counter