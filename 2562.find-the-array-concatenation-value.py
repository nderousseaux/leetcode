#
# @lc app=leetcode id=2562 lang=python3
#
# [2562] Find the Array Concatenation Value
#

# @lc code=start
from math import ceil

class Solution:
    def findTheArrayConcVal(self, nums: List[int]) -> int:
        res: int = 0
        while len(nums) > 0:
            cat = str(nums[0])
            del nums[0]

            if len(nums) > 0:
                cat += str(nums[-1])
                del nums[-1]

            res += int(cat)

        return res
# @lc code=end
