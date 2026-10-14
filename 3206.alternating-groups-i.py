#
# @lc app=leetcode id=3206 lang=python3
#
# [3206] Alternating Groups I
#

# @lc code=start
class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        res: int = 0
        for i, value in enumerate(colors):
            if (
                value != colors[(i-1) % len(colors)] and
                value != colors[(i+1) % len(colors)]
            ):
                res += 1
        return res
# @lc code=end
