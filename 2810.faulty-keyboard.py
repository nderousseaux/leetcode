#
# @lc app=leetcode id=2810 lang=python3
#
# [2810] Faulty Keyboard
#

# @lc code=start
class Solution:
    def finalString(self, s: str) -> str:
        res = ""
        for c in s:
            if c == "i":
                res = res[::-1]
            else:
                res += c
        return res
# @lc code=end
