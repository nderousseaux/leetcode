#
# @lc app=leetcode id=2085 lang=python3
#
# [2085] Count Common Words With One Occurrence
#

# @lc code=start
class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        res = 0
        for w1 in words1:
            if words2.count(w1) == 1 and words1.count(w1) == 1:
                res += 1
        return res
# @lc code=end

