#
# @lc app=leetcode id=2760 lang=python3
#
# [2760] Longest Even Odd Subarray With Threshold
#

# @lc code=start
class Solution:
    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:
        m: int = 0
        for l in range(len(nums)):
            if nums[l] % 2 != 0:
                continue
            for r in range(l, len(nums)):
                if nums[r] > threshold:
                    break
                if r > l and nums[r] % 2 == nums[r-1] % 2:
                    break
                m = max(m, r - l + 1)
        return m
# @lc code=end
