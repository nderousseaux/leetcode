#
# @lc app=leetcode id=2913 lang=python3
#
# [2913] Subarrays Distinct Element Sum of Squares I
#

# @lc code=start
class Solution:
    def sumCounts(self, nums: List[int]) -> int:
        res: int = 0;
        for i in range(len(nums)):
            for j in range(i+1, len(nums)+1):
                res += len(set(nums[i:j]))**2
        return res

# @lc code=end
