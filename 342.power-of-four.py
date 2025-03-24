#
# @lc app=leetcode id=342 lang=python3
#
# [342] Power of Four
#

# @lc code=start
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        # Bit manipulation
        return n > 0 and n & (n - 1) == 0 and n & 0xaaaaaaaa == 0
# @lc code=end

