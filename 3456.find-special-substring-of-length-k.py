#
# @lc app=leetcode id=3456 lang=python3
#
# [3456] Find Special Substring of Length K
#

# @lc code=start
class Solution:
    def hasSpecialSubstring(self, s: str, k: int) -> bool:
        for i in range(len(s) - k+1):
            if (
                (len(set(s[i:i+k])) == 1) and
                (i <= 0 or s[i - 1] != s[i]) and
                (i + k >= len(s) or s[i+k] != s[i])
            ):
                return True
        return False
# @lc code=end
