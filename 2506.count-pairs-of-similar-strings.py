#
# @lc app=leetcode id=2506 lang=python3
#
# [2506] Count Pairs Of Similar Strings
#

# @lc code=start
class Solution:
    def similarPairs(self, words: List[str]) -> int:
        res: int = 0
        for i in range(len(words)):
            for j in range(i+1, len(words)):
                res += 1 if set(words[i]) == set(words[j]) else 0
        return res
# @lc code=end
