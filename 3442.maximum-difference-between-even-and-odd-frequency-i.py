#
# @lc app=leetcode id=3442 lang=python3
#
# [3442] Maximum Difference Between Even and Odd Frequency I
#

# @lc code=start
class Solution:
    def maxDifference(self, s: str) -> int:
        freq: dict[str, int] = {}
        res: int = -math.inf
        for c in s:
            freq[c] = freq.get(c, 0) + 1
        for a1 in freq.values():
            for a2 in freq.values():
                if a1 % 2 == 0 and a2 % 2 == 1:
                    res = max(res, a2 - a1)
        return res
# @lc code=end
