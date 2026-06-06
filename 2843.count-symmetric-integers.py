#
# @lc app=leetcode id=2843 lang=python3
#
# [2843]   Count Symmetric Integers
#

# @lc code=start
class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:
        def isSymetric(x: int) -> bool:
            xS: str = str(x)
            if len(xS) % 2 != 0:
                return False
            return (
                sum([int(i) for i in xS[:len(xS)//2]]) ==
                sum([int(i) for i in xS[len(xS)//2:]])
            )
        res: int = 0
        for i in range(low, high+1):
            if isSymetric(i):
                res += 1
        return res
# @lc code=end
