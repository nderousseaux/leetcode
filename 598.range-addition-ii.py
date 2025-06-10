#
# @lc app=leetcode id=598 lang=python3
#
# [598] Range Addition II
#

# @lc code=start
class Solution:
    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:
        if len(ops) == 0:
            return m * n
        
        min_x = min(o[0] for o in ops)
        min_y = min(o[1] for o in ops)

        return min_x * min_y

# @lc code=end