#
# @lc app=leetcode id=3550 lang=python3
#
# [3550] Smallest Index With Digit Sum Equal to Index
#

# @lc code=start
class Solution:
    def smallestIndex(self, nums: List[int]) -> int:
        for idx, value in enumerate(nums):
            if sum([int(v) for v in str(value)]) == idx:
                return idx
        return -1
# @lc code=end
