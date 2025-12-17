#
# @lc app=leetcode id=1876 lang=python3
#
# [1876] Substrings of Size Three with Distinct Characters
#

# @lc code=start
class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        res = 0
        for i in range(0, len(s) - 2):
            if len(set(s[i:i+3])) == 3:
                res += 1

        return res  
# @lc code=end

