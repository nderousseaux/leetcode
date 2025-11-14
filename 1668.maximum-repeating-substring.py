#
# @lc app=leetcode id=1668 lang=python3
#
# [1668] Maximum Repeating Substring
#

# @lc code=start
class Solution:
    def maxRepeating(self, sequence: str, word: str) -> int:
        res = 0
        repeated = word
        while repeated in sequence:
            res += 1
            repeated += word
        return res
        
# @lc code=end

