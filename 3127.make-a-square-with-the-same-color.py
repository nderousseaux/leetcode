#
# @lc app=leetcode id=3127 lang=python3
#
# [3127] Make a Square with the Same Color
#

# @lc code=start
class Solution:
    def canMakeSquare(self, grid: List[List[str]]) -> bool:
        for i in range(2):
            for j in range(2):
                colors = [
                    grid[i][j],
                    grid[i][j+1],
                    grid[i+1][j],
                    grid[i+1][j+1]
                ]
                if colors.count("W") >= 3 or colors.count("B") >= 3:
                    return True
        return False
# @lc code=end
