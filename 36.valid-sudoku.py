#
# @lc app=leetcode id=36 lang=python3
#
# [36] Valid Sudoku
#

# @lc code=start
class Solution:
    def addIfUnique(self, s: Set[str], e: str):
        if e in s:
            raise Exception;
        s.add(e)

    def isValidSudoku(self, board: List[List[str]]) -> bool:
        lines: List[Set[str]] = [set() for _ in range(9)]
        columns: List[Set[str]] = [set() for _ in range(9)] 
        boxes: List[Set[str]] = [set() for _ in range(9)] 

        try:
            for i in range(9):
                for j in range(9):
                    n = board[i][j]
                    if n == '.':
                        continue
                    
                    # Add to line
                    self.addIfUnique(lines[i], n)

                    # Add to column
                    self.addIfUnique(columns[j], n)

                    # Add to box
                    # print(j//3 + (i//3)*3)
                    self.addIfUnique(boxes[j//3 + (i//3)*3], n)

        except:
            return False
        return True
# @lc code=end

