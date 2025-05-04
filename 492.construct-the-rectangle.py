#
# @lc app=leetcode id=492 lang=python3
#
# [492] Construct the Rectangle
#

# @lc code=start
class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        width = int(area**0.5)
        while area % width != 0:
            width -= 1
        return [area // width, width]
# @lc code=end

