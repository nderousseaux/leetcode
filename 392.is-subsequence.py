#
# @lc app=leetcode id=392 lang=python3
#
# [392] Is Subsequence
#

# @lc code=start
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        # Initialize pointers for both strings
        i, j = 0, 0

        # Iterate through both strings
        while i < len(s) and j < len(t):
            # If characters match, move to the next character in s
            if s[i] == t[j]:
                i += 1
            # Always move to the next character in t
            j += 1

        # If we have gone through all characters in s, it is a subsequence
        return i == len(s)        
# @lc code=end

