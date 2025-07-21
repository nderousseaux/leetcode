#
# @lc app=leetcode id=836 lang=python3
#
# [836] Rectangle Overlap
#

# @lc code=start
class Solution:
    def isRectangleOverlap(self, rec1: List[int], rec2: List[int]) -> bool:
        # Is overlap x ?
        h = min(rec1[3], rec2[3]) - max(rec1[1], rec2[1])
        # Is overlap y ?
        w = min(rec1[2], rec2[2]) - max(rec1[0], rec2[0])

        return True if min(w, h) > 0 else False
        
# @lc code=end

