#
# @lc app=leetcode id=1732 lang=python3
#
# [1732] Find the Highest Altitude
#

# @lc code=start
class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        res: int = 0
        current: int = 0
        for g in gain:
            current  += g
            res = max(res, current)
        return res
# @lc code=end

