#
# @lc app=leetcode id=1725 lang=python3
#
# [1725] Number Of Rectangles That Can Form The Largest Square
#

# @lc code=start
class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        square = [min(r) for r in rectangles]

        return len([s for s in square if s == max(square)])
        
# @lc code=end

