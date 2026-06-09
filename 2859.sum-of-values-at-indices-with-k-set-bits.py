#
# @lc app=leetcode id=2859 lang=python3
#
# [2859] Sum of Values at Indices With K Set Bits
#

# @lc code=start
class Solution:
    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        return sum([n for i, n in enumerate(nums) if bin(i).count('1') == k])
# @lc code=end
