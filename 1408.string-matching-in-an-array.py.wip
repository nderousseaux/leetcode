#
# @lc app=leetcode id=1408 lang=python3
#
# [1408] String Matching in an Array
#

# @lc code=start
class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        res: List[int] = []

        for w1 in words:
            for w2 in words:
                if w1 != w2 and w1 in w2:
                    res.append(w1)
                    break

        return res
        
# @lc code=end

