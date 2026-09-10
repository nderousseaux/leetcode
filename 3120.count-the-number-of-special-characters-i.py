#
# @lc app=leetcode id=3120 lang=python3
#
# [3120] Count the Number of Special Characters I
#

# @lc code=start
class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        res: int = 0
        lst = set()
        for w in word:
            c = ord(w)
            other = c - 32 if c >= 97 else c + 32
            if other in lst and c not in lst:
                res += 1
            lst.add(c)
        return res
# @lc code=end
