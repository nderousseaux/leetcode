#
# @lc app=leetcode id=29 lang=python3
#
# [29] Divide Two Integers
#

# @lc code=start
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        minus_limit = -(2**31)
        plus_limit = (2**31 - 1)
        isPositif = (dividend >= 0) == (divisor >= 0)
        dividend = abs(dividend)
        divisor = abs(divisor)

        res = len(range(0,dividend-divisor+1, divisor))
        res = res if isPositif else -res

        return min(max(res, minus_limit), plus_limit)
        
# @lc code=end

