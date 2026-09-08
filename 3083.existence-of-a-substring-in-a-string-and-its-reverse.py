#
# @lc app=leetcode id=3083 lang=python3
#
# [3083] Existence of a Substring in a String and Its Reverse
#

# @lc code=start
class Solution:
    def isSubstringPresent(self, s: str) -> bool:
        for i in range(len(s) - 1):
            if s[i:i+2] in s[::-1]:
                return True
        return False
# @lc code=end
