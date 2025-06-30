#
# @lc app=leetcode id=696 lang=python3
#
# [696] Count Binary Substrings
#

# @lc code=start
class Solution:
    def countBinarySubstrings(self, s: str) -> int:
        curr = 1
        pre = 0
        c = 0
        # Traverse the string
        for i in range(1, len(s)):
            # If the character is same as previous
            if s[i] == s[i-1]:
                curr += 1
            # If different
            else:
                pre = curr
                curr = 1

            # If the previous length is greater or equal to curr
            # -> valid substring
            c += 1 if pre >= curr else 0

        return c



# @lc code=end

