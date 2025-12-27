#
# @lc app=leetcode id=1974 lang=python3
#
# [1974] Minimum Time to Type Word Using Special Typewriter
#

# @lc code=start
class Solution:
    def minTimeToType(self, word: str) -> int:
        res = len(word)
        pos = ord("a")
        for c in word:
            dest = (ord(c) - pos) % 26 
            res += min(dest, 26 - dest)
            pos = ord(c)


        return res
# @lc code=end

