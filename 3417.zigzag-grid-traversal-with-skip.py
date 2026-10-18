#
# @lc app=leetcode id=3417 lang=python3
#
# [3417] Zigzag Grid Traversal With Skip
#

# @lc code=start
class Solution:
    def zigzagTraversal(self, grid: List[List[int]]) -> List[int]:
        res: List[int] = []
        for i, row in enumerate(grid):
            for j, cel in enumerate(row if i % 2 == 0 else row[::-1]):
                if (i * len(grid[0]) + j) % 2 == 0:
                    res.append(cel)
        return res
# @lc code=end
