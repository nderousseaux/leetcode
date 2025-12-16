#
# @lc app=leetcode id=1869 lang=python3
#
# [1869] Longer Contiguous Segments of Ones than Zeros
#

# @lc code=start
class Solution:
    def checkZeroOnes(self, s: str) -> bool:
        l0 = l1 = 0
        c0 = c1 = 0
        for c in s:
            if c == '1':
                c1 += 1
                c0 = 0
                l1 = max(l1, c1)
            elif c == '0':
                c0 += 1
                c1 = 0
                l0 = max(l0, c0)
        return l1 > l0
# @lc code=end

