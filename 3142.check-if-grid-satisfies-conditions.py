#
# @lc app=leetcode id=3142 lang=python3
#
# [3142] Check if Grid Satisfies Conditions
#

# @lc code=start
class Solution:
    def satisfiesConditions(self, grid: List[List[int]]) -> bool:
        for i, _ in enumerate(grid):
            for j, _ in enumerate(grid[0]):
                print(i, j)
                if i + 1 < len(grid) and grid[i][j] != grid[i+1][j]:
                    return False
                if j + 1 < len(grid[0]) and grid[i][j] == grid[i][j+1]:
                    return False
        return True
# @lc code=end
