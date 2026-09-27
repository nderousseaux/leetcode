#
# @lc app=leetcode id=3242 lang=python3
#
# [3242] Design Neighbor Sum Service
#

# @lc code=start
class NeighborSum:

    def __init__(self, grid: List[List[int]]):
        self.grid = grid

    def getCoordinate(self, value: int) -> List[int]:
        for i, row in enumerate(self.grid):
            for j, val in enumerate(row):
                if val == value:
                    return i, j

    def getValue(self, i: int, j: int) -> int:
        if (
            0 <= i < len(self.grid) and
            0 <= j < len(self.grid)
        ):
            return self.grid[i][j]
        return 0

    def adjacentSum(self, value: int) -> int:
        i, j = self.getCoordinate(value)
        return (
            self.getValue(i+1, j) +
            self.getValue(i-1, j) +
            self.getValue(i, j+1) +
            self.getValue(i, j-1)
        )

    def diagonalSum(self, value: int) -> int:
        i, j = self.getCoordinate(value)
        return (
            self.getValue(i+1, j+1) +
            self.getValue(i-1, j+1) +
            self.getValue(i+1, j-1) +
            self.getValue(i-1, j-1)
        )



# Your NeighborSum object will be instantiated and called as such:
# obj = NeighborSum(grid)
# param_1 = obj.adjacentSum(value)
# param_2 = obj.diagonalSum(value)
# @lc code=end
