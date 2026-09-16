#
# @lc app=leetcode id=3158 lang=python3
#
# [3158] Find the XOR of Numbers Which Appear Twice
#

# @lc code=start
class Solution:
    def duplicateNumbersXOR(self, nums: List[int]) -> int:
        res: int = 0
        for idx, elm in enumerate(nums):
            if elm in nums[idx+1:]:
                res ^= elm
        return res
# @lc code=end
