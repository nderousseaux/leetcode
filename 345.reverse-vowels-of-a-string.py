#
# @lc app=leetcode id=345 lang=python3
#
# [345] Reverse Vowels of a String
#

# @lc code=start
class Solution:
    def reverseVowels(self, s: str) -> str:
        s = list(s)
        vowels = set("aeiouAEIOU")
        left, right = 0, len(s) - 1
        while left < right:
            if s[left] in vowels and s[right] in vowels:
                s[left], s[right] = s[right], s[left]
                left, right = left + 1, right - 1
            if s[left] not in vowels:
                left += 1
            if s[right] not in vowels:
                right -= 1
        return "".join(s)
# @lc code=end
