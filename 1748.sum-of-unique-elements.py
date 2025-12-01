#
# @lc app=leetcode id=1748 lang=python3
#
# [1748] Sum of Unique Elements
#

# @lc code=start
class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        idx = set([i for i in range(len(nums)) if nums.count(nums[i]) == 1])
        return sum([nums[i] for i in idx])
# @lc code=end

