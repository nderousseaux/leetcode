#
# @lc app=leetcode id=2357 lang=python3
#
# [2357] Make Array Zero by Subtracting Equal Amounts
#

# @lc code=start
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        res = 0
        while not all(i == 0 for i in nums):
            m = min([i for i in nums if i != 0])
            nums = [i - m if i != 0 else 0 for i in nums]
            res += 1

        return res
        
# @lc code=end

