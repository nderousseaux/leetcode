#
# @lc app=leetcode id=3 lang=python3
#
# [3] Longest Substring Without Repeating Characters
#

# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if(len(s) == 0):
           return 0
        
        lenght = 0
        start = 0
        char_index = {}
        for i in range(len(s)):

            # If the character is already in the substring, we update the start index
            if s[i] in char_index and char_index[s[i]] >= start:
                start = char_index[s[i]] + 1

            # Update the length of the longest substring
            lenght = max(lenght, i - start + 1)
            
            # Update the last seen index of the character
            char_index[s[i]] = i
        return lenght

# @lc code=end

