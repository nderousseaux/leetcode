#
# @lc app=leetcode id=2697 lang=python3
#
# [2697] Lexicographically Smallest Palindrome
#

# @lc code=start
from math import floor
class Solution:
    def makeSmallestPalindrome(self, s: str) -> str:
        for i in range(floor(len(s)/2)):
            if s[i] > s[-i-1]:
                s = s[:i] + s[-i-1] + s[i + 1:]
            elif s[i] < s[-i-1]:
                if i == 0:
                    s = s[:-i-1] + s[i]
                else:
                    s = s[:-i-1] + s[i] + s[-i:]
        return s
# @lc code=end
