#
# @lc app=leetcode id=2133 lang=python3
#
# [2133] Check if Every Row and Column Contains All Numbers
#

# @lc code=start
class Solution:
    def checkValid(self, matrix: List[List[int]]) -> bool:
        # Check line
        for l in matrix:
            if len(set(l)) < len(l):
                return False
        
        # Check column
        for c in range(len(matrix[0])):
            col = [matrix[i][c] for i in range(len(matrix))]
            if len(set(col)) < len(col):
                return False

        return True
# @lc code=end

