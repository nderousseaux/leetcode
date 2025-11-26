#
# @lc app=leetcode id=1672 lang=python3
#
# [1672] Richest Customer Wealth
#

# @lc code=start
class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        res = 0

        for c in accounts:
            res = max(res, sum(c))

        return res
# @lc code=end

