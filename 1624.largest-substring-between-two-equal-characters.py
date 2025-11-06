#
# @lc app=leetcode id=1624 lang=python3
#
# [1624] Largest Substring Between Two Equal Characters
#

# @lc code=start
class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        first_pos = {}
        max_lengh = -1
        for i, c in enumerate(s):
            if c in first_pos:
                max_lengh = max(max_lengh, i - first_pos[c] - 1) 
            else:
                first_pos[c] = i
        return max_lengh
        
# @lc code=end

