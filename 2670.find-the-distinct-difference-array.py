#
# @lc app=leetcode id=2670 lang=python3
#
# [2670] Find the Distinct Difference Array
#

# @lc code=start
class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        res: List[int] = []
        for i in range(len(nums)):
            prefix = len(set(nums[:i+1]))
            suffix = len(set(nums[i+1:]))
            res.append(prefix-suffix)
        return res
# @lc code=end
