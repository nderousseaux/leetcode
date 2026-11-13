#
# @lc app=leetcode id=3105 lang=python3
#
# [3105] Longest Strictly Increasing or Strictly Decreasing Subarray
#

# @lc code=start
class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        inc = 1
        dec = 1
        res = 1

        for i in range(1, len(nums)):
            if nums[i-1] > nums[i]:
                dec += 1
                inc = 1
            elif nums[i-1] < nums[i]:
                dec = 1
                inc += 1
            else:
                inc = 1
                dec = 1

            res = max(res, inc, dec)
        return res

# @lc code=end
