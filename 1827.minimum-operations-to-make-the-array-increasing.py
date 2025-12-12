#
# @lc app=leetcode id=1827 lang=python3
#
# [1827] Minimum Operations to Make the Array Increasing
#

# @lc code=start
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0

        res = prev = 0

        # For each nums
        for n in nums:

            # If not increasing
            if n <= prev:
                prev += 1
                res += prev - n
            # If increasing
            else:
                prev = n
        
        return res

        
        return res

# @lc code=end

