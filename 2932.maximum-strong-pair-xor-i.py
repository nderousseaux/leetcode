#
# @lc app=leetcode id=2932 lang=python3
#
# [2932] Maximum Strong Pair XOR I
#

# @lc code=start
class Solution:
    def maximumStrongPairXor(self, nums: List[int]) -> int:
        res: int = -1
        for i in range(len(nums)):
            for j in range(i, len(nums)):
                x = nums[i]
                y = nums[j]
                if abs(x-y) <= min(x, y):
                    res = max(res, x ^ y)

        return res

# @lc code=end
