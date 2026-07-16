#
# @lc app=leetcode id=3019 lang=python3
#
# [3019] Number of Changing Keys
#

# @lc code=start
class Solution:
    def countKeyChanges(self, s: str) -> int:
        res: int = 0
        for i in range(1, len(s)):
            if s[i-1] not in [s[i].lower(), s[i].upper()]:
                res += 1
        return res
# @lc code=end
