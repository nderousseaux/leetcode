#
# @lc app=leetcode id=2639 lang=python3
#
# [2639] Find the Width of Columns of a Grid
#

# @lc code=start
class Solution:
    def findColumnWidth(self, grid: List[List[int]]) -> List[int]:
        res: List[int] = [1 for _ in range(len(grid[0]))]
        for i in range(len(grid[0])):
            for j in range(len(grid)):
                res[i] = max(res[i], len(str(grid[j][i])))
        return res
# @lc code=end
