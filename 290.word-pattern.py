#
# @lc app=leetcode id=290 lang=python3
#
# [290] Word Pattern
#

# @lc code=start
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split()
        if len(pattern) != len(words):
            return False
        d = {}
        for i in range(len(pattern)):
            if pattern[i] in d:
                if d[pattern[i]] != words[i]:
                    return False
            else:
                if words[i] in d.values():
                    return False
                d[pattern[i]] = words[i]
        return True
# @lc code=end

