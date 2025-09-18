#
# @lc app=leetcode id=1266 lang=python3
#
# [1266] Minimum Time Visiting All Points
#

# @lc code=start
class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        res = 0
        s = points[0]

        for e in points[1:]:
            # The minimum time is the maximum of the absolute differences
            # because we can move diagonally
            res += max(abs(e[0] - s[0]), abs(e[1] - s[1]))

            s = e

        return res
# @lc code=end