#
# @lc app=leetcode id=2848 lang=python3
#
# [2848] Points That Intersect With Cars
#

# @lc code=start
class Solution:
    def numberOfPoints(self, nums: List[List[int]]) -> int:
        points: List[int] = []

        for n in nums:
            for j in range(n[0], n[1]+1):
                if j not in points:
                    points.append(j)

        return len(points)
# @lc code=end
