#
# @lc app=leetcode id=2427 lang=python3
#
# [2427] Number of Common Factors
#

# @lc code=start
class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        res = 1
        for i in range(2, int(min(a,b)/2+1)):
            if a % i == 0 and b % i == 0:
                res += 1
        if max(a,b) % min(a,b) == 0 and a is not 1:
            res += 1

        return res
# @lc code=end
