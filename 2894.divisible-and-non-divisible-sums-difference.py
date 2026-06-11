#
# @lc app=leetcode id=2894 lang=python3
#
# [2894] Divisible and Non-divisible Sums Difference
#

# @lc code=start
class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        n1: int = 0
        n2: int = 0
        for i in range(1, n+1):
            if i % m == 0:
                n2 += i
            else:
                n1 += i
        return n1 - n2
# @lc code=end
