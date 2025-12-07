#
# @lc app=leetcode id=999 lang=python3
#
# [999] Available Captures for Rook
#

# @lc code=start
class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        res = 0
        # Find rook
        x = y = -1
        for i in range(8):
            for j in range(8):
                if board[j][i] == 'R':
                    x = i
                    y = j

        # Check top
        for j in range(y-1, -1, -1):
            if board[j][x] == 'p':
                res+=1
                break
            if board[j][x] == 'B':
                break

        # Check bottom
        for j in range(y+1, 8):
            if board[j][x] == 'p':
                res+=1
                break
            if board[j][x] == 'B':
                break

        # Check left
        for i in range(x-1, -1, -1):
            if board[y][i] == 'p':
                res+=1
                break
            if board[y][i] == 'B':
                break

        # Check right
        for i in range(x+1, 8):
            if board[y][i] == 'p':
                res+=1
                break
            if board[y][i] == 'B':
                break

        return res
# @lc code=end

