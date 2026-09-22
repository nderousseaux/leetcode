#
# @lc app=leetcode id=3200 lang=python3
#
# [3200] Maximum Height of a Triangle
#

# @lc code=start
class Solution:
    def maxHeightOfTriangle(self, red: int, blue: int) -> int:
        # Create a triangle starting by...
        def triangle(startByRed: bool) -> int:
            colors: List[int] = [red, blue] if startByRed else [blue, red]
            currentColor: int = 0
            currentNumber: int = 1

            while colors[currentColor] >= currentNumber:
                colors[currentColor]-=currentNumber
                currentNumber+=1
                currentColor = (currentColor + 1) % len(colors)
            return currentNumber - 1


        return max([triangle(True), triangle(False)])

# @lc code=end
