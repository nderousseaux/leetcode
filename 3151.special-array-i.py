#
# @lc app=leetcode id=3151 lang=python3
#
# [3151] Special Array I
#

# @lc code=start
class Solution:
    def isArraySpecial(self, nums: List[int]) -> bool:
        nextEven: bool = nums[0] % 2 == 0
        for elem in nums[1:]:
            if elem % 2 != nextEven:
                return False
            nextEven = not nextEven
        return True
# @lc code=end
