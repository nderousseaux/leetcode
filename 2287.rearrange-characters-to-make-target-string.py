#
# @lc app=leetcode id=2287 lang=python3
#
# [2287] Rearrange Characters to Make Target String
#

# @lc code=start
class Solution:
    def rearrangeCharacters(self, s: str, target: str) -> int:
        res = []
        for l in target:
            res.append(s.count(l)//target.count(l))
        return min(res)

# @lc code=end

