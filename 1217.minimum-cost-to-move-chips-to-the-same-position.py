#
# @lc app=leetcode id=1217 lang=python3
#
# [1217] Minimum Cost to Move Chips to The Same Position
#

# @lc code=start
class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
        even = sum(1 for p in position if p % 2 == 0)
        odd = len(position) - even
        return min(even, odd)
# @lc code=end

