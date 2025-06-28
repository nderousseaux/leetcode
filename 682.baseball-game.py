#
# @lc app=leetcode id=682 lang=python3
#
# [682] Baseball Game
#

# @lc code=start
class Solution:
    def calPoints(self, operations: List[str]) -> int:
        res = []

        for o in operations:
            if o == '+':
                res.append(res[-1] + res[-2])
            elif o == 'D':
                res.append(res[-1]*2)
            elif o == 'C':
                res.pop()
            else:
                res.append(int(o))

        return sum(res)
# @lc code=end

