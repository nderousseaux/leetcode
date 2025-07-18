#
# @lc app=leetcode id=821 lang=python3
#
# [821] Shortest Distance to a Character
#

# @lc code=start
class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        indexs = [i for i in range(len(s)) if s[i] == c]
        res = []
        for i in range(len(s)):
            closest = min(indexs, key=lambda x: abs(x - i))
            res.append(abs(closest - i))

        return res
# @lc code=end

