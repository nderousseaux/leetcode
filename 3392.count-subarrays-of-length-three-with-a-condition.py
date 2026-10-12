#
# @lc app=leetcode id=3392 lang=python3
#
# [3392] Count Subarrays of Length Three With a Condition
#

# @lc code=start
class Solution:
    def countSubarrays(self, nums: List[int]) -> int:
        res = 0
        for i in range(len(nums)-2):
            res += 1 if nums[i] + nums[i+2] == nums[i+1]/2 else 0
        return res
# @lc code=end
