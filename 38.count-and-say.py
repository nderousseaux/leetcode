#
# @lc app=leetcode id=38 lang=python3
#
# [38] Count and Say
#

# @lc code=start
from itertools import groupby

class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return "1"

        groups = ["".join(g) for _, g in groupby(self.countAndSay(n-1))]
        res = "".join([f"{len(g)}{int(g[0])}" for g in groups])

        return res
        
# @lc code=end

