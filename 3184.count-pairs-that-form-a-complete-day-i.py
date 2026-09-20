 #
# @lc app=leetcode id=3184 lang=python3
#
# [3184] Count Pairs That Form a Complete Day I
#

# @lc code=start
class Solution:
    def countCompleteDayPairs(self, hours: List[int]) -> int:
        res: int = 0
        for i, v1 in enumerate(hours):
            for _, v2 in enumerate(hours[i+1:]):
                res += 1 if (v1 + v2) % 24 == 0 else 0
        return res
# @lc code=end
