#
# @lc app=leetcode id=1925 lang=python3
#
# [1925] Count Square Sum Triples
#

# @lc code=start
class Solution:
    def countTriples(self, n: int) -> int:
        res = 0
        for a in range(1, n):
            for b in range(a+1, n):
                c = math.sqrt(a**2 + b**2)
                if int(c) == c and c <= n:
                    res += 2 # 2 for swap a and b
        return res
# @lc code=end

