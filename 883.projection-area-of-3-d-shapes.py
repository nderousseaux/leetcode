#
# @lc app=leetcode id=883 lang=python3
#
# [883] Projection Area of 3D Shapes
#

# @lc code=start
class Solution:
    def projectionArea(self, grid: List[List[int]]) -> int:
        res = 0
        # First -> plane y, x
        for l in grid:
            res += len([i for i in l if i != 0]) # Plane y,x
            res += max(l) # Plane x,z
            
        # Plane y,z
        for i in range(len(grid[0])):
            res += max(row[i] for row in grid)

        return res
# @lc code=end

