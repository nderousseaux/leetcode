#
# @lc app=leetcode id=3345 lang=python3
#
# [3345] Smallest Divisible Digit Product I
#

# @lc code=start
class Solution:
    def smallestNumber(self, n: int, t: int) -> int:
        def productDigit(p: int) -> int:
            res = 1
            for x in [int(i) for i in str(p)]:
                res *= x
            return res

        while (productDigit(n) % t != 0):
            n+=1

        return n
# @lc code=end
