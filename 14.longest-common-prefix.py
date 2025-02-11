#
# @lc app=leetcode id=14 lang=python3
#
# [14] Longest Common Prefix
#

# @lc code=start
from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if strs[0] == "":
            return ""
        prefix = strs[0][0]
        while True:
            # If no one starts with prefix, return prefix
            print(prefix)
            if not all([s.startswith(prefix) for s in strs]):
                print("here")
                return prefix[:-1]
            
            # If the prefix is the same as the first string, return prefix
            if prefix == strs[0]:
                return prefix
            # Else, we add the next character to the prefix
            prefix += strs[0][len(prefix)]
        
# @lc code=end

