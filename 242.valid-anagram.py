#
# @lc app=leetcode id=242 lang=python3
#
# [242] Valid Anagram
#

# @lc code=start
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_dict = {}
        t_dict = {}
        for i in s:
            s_dict[i] = s_dict.get(i, 0) + 1
        for i in t:
            t_dict[i] = t_dict.get(i, 0) + 1
        return s_dict == t_dict
        
# @lc code=end

