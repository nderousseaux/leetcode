#
# @lc app=leetcode id=3536 lang=python3
#
# [3536] Maximum Product of Two Digits
#

# @lc code=start
class Solution:
    def maxProduct(self, n: int) -> int:
        tab: List[int] = sorted([int(d) for d in str(n)], reverse=True)
        return tab[0] * tab[1]
# @lc code=end
