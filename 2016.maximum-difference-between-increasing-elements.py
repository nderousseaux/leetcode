#
# @lc app=leetcode id=2016 lang=python3
#
# [2016] Maximum Difference Between Increasing Elements
#

# @lc code=start
class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        res = -1
        less = nums[0]

        for n in nums:
            res = max(res, n - less)
            less = min(less, n)
        return res if res != 0 else -1

# @lc code=end

