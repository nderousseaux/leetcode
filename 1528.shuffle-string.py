#
# @lc app=leetcode id=1528 lang=python3
#
# [1528] Shuffle String
#

# @lc code=start
class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:        
        res = ["" for i in range(len(s))]

        for i, c in enumerate(s):
            res[indices[i]] = c

        return "".join(res)
# @lc code=end

