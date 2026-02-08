#
# @lc app=leetcode id=2315 lang=python3
#
# [2315] Count Asterisks
#

# @lc code=start
class Solution:
    def countAsterisks(self, s: str) -> int:
        detectMode: bool = True
        res: int = 0
        for c in s:
            if c == '|':
                detectMode = not detectMode
            if detectMode and c == "*":
                res += 1

        return res
        
# @lc code=end

