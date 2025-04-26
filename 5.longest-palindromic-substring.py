#
# @lc app=leetcode id=5 lang=python3
#
# [5] Longest Palindromic Substring
#

# @lc code=start
class Solution:
    def isPalindrome(self, s: str) -> bool:
        return s == s[::-1]

    def longestPalindrome(self, s: str) -> str:
        for l in range(len(s), 0, -1):
            for i in range(len(s) - l + 1):
                if self.isPalindrome(s[i:i + l]):
                    return s[i:i + l]
# @lc code=end

