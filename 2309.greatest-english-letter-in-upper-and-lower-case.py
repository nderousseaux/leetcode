#
# @lc app=leetcode id=2309 lang=python3
#
# [2309] Greatest English Letter in Upper and Lower Case
#

# @lc code=start
class Solution:
    def greatestLetter(self, s: str) -> str:
        # Transform in ord
        s = [ord(c) for c in s]
        
        for i in range(90, 64, -1):
            if (
                i in s and
                i+32 in s
            ):
                return chr(i)

        return ""
        
# @lc code=end

