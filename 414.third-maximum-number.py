#
# @lc app=leetcode id=414 lang=python3
#
# [414] Third Maximum Number
#

# @lc code=start
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        """
        :type nums: List[int]
        :rtype: int
        """
        nums = sorted(set(nums), reverse=True)
        return nums[2] if len(nums) >= 3 else nums[0]
# @lc code=end

