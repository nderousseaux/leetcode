#
# @lc app=leetcode id=2784 lang=python3
#
# [2784] Check if Array is Good
#

# @lc code=start
class Solution:
    def isGood(self, nums: List[int]) -> bool:
        n: int = max(nums)
        return not (
            len(nums) != n + 1 or
            len([i for i in range(1, len(nums)) if i not in nums]) != 0 or
            len([i for i in nums if i == n]) != 2
        )
# @lc code=end
