#
# @lc app=leetcode id=2103 lang=python3
#
# [2103] Rings and Rods
#

# @lc code=start
class Solution:
    def countPoints(self, rings: str) -> int:
        res = {}
        for i in range(0, len(rings), 2):
            if rings[i+1] not in res:
                res[rings[i+1]] = set()
            res[rings[i+1]].add(rings[i])

        return len([v for v in res.values() if len(v) == 3]) 

        
# @lc code=end

