#
# @lc app=leetcode id=3643 lang=python3
#
# [3643] Flip Square Submatrix Vertically
#

# @lc code=start
class Solution:
    def reverseSubmatrix(self, grid: List[List[int]], x: int, y: int, k: int) -> List[List[int]]:
        for j in range(y,y+k):
            for i in range(k//2):
                grid[x+i][j], grid[x+k-i-1][j] = grid[x+k-i-1][j], grid[x+i][j]
        return grid
# @lc code=end
