#
# @lc app=leetcode id=2970 lang=python3
#
# [2970] Count the Number of Incremovable Subarrays I
#

# @lc code=start
class Solution:
    def incremovableSubarrayCount(self, nums: List[int]) -> int:
        def isIncreasing(l: List[int]):
            for i in range(1, len(l)):
                if l[i-1] >= l[i]:
                    return False
            return True

        res: int = 0

        for i in range(len(nums)):
            for j in range(i+1, len(nums) + 1):
                if isIncreasing(nums[:i] + nums[j:]):
                    res += 1
        return res
# @lc code=end
