#
# @lc app=leetcode id=3502 lang=python3
#
# [3502] Minimum Cost to Reach Every Position
#

# @lc code=start
class Solution:
    def minCosts(self, cost: List[int]) -> List[int]:
        return [min(cost[:i+1]) for i in range(len(cost))]

# @lc code=end
