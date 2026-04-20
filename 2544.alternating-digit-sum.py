#
# @lc app=leetcode id=2544 lang=python3
#
# [2544] Alternating Digit Sum
#

# @lc code=start
class Solution:
    def alternateDigitSum(self, n: int) -> int:
        res = 0
        sign = 1
        for i in str(n):
            res += int(i) * sign
            sign *= -1

        return res
# @lc code=end
