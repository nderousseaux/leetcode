#
# @lc app=leetcode id=3467 lang=python3
#
# [3467] Transform Array by Parity
#

# @lc code=start
class Solution:
    def transformArray(self, nums: List[int]) -> List[int]:
        return sorted([n % 2 for n in nums])
# @lc code=end
