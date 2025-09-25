#
# @lc app=leetcode id=1317 lang=python3
#
# [1317] Convert Integer to the Sum of Two No-Zero Integers
#

# @lc code=start
class Solution:
    def getNoZeroIntegers(self, n: int) -> List[int]:
        r = n
        while (r > 0):
            if "0" not in str(r) and "0" not in str(n-r):
                return [r, n-r]
            r -= 1
        return
# @lc code=end

