#
# @lc app=leetcode id=3423 lang=python3
#
# [3423] Maximum Difference Between Adjacent Elements in a Circular Array
#

# @lc code=start
class Solution:
    def maxAdjacentDistance(self, nums: List[int]) -> int:
        res = 0
        for i, e in enumerate(nums):
            res = max(res, abs(e - nums[(i+1) % len(nums)]))
        return res
# @lc code=end
