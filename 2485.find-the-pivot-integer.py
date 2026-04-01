#
# @lc app=leetcode id=2485 lang=python3
#
# [2485] Find the Pivot Integer
#

# @lc code=start
class Solution:
    def pivotInteger(self, n: int) -> int:
        l = list(range(1,n+1))
        for i in range(0, n):
            if sum(l[:i+1]) == sum(l[i:]):
                return l[i]
        return -1

# @lc code=end
