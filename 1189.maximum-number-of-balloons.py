#
# @lc app=leetcode id=1189 lang=python3
#
# [1189] Maximum Number of Balloons
#

# @lc code=start
class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        from collections import Counter
        
        text_count = Counter(text)
        balloon_count = Counter("balloon")
        
        return min(text_count[c] // balloon_count[c] for c in balloon_count)
# @lc code=end

