#
# @lc app=leetcode id=1556 lang=python3
#
# [1556] Thousand Separator
#

# @lc code=start
class Solution:
    def thousandSeparator(self, n: int) -> str:
        n = str(n)
        res = ""
        count = 0

        for digit in reversed(n):
            if count and count % 3 == 0:
                res = '.' + res
            res = digit + res
            count += 1

        return res
# @lc code=end

