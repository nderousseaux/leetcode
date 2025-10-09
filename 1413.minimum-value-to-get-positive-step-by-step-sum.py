#
# @lc app=leetcode id=1413 lang=python3
#
# [1413] Minimum Value to Get Positive Step by Step Sum
#

# @lc code=start
class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        total: int = 0
        min_sum: int = 0

        for n in nums:
            total += n
            min_sum = min(total, min_sum)

        return 1 - min_sum
        
# @lc code=end

