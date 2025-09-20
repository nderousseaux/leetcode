#
# @lc app=leetcode id=844 lang=python3
#
# [844] Backspace String Compare
#

# @lc code=start
class Solution:
    def apply_backspace(self, s:str) -> str:
        res = ""
        for c in s:
            if c == "#":
                res = res[:-1]
            else:
                res += c
        return res

    def backspaceCompare(self, s: str, t: str) -> bool:
        return self.apply_backspace(s) == self.apply_backspace(t)
# @lc code=end

