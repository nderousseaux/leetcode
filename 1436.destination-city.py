#
# @lc app=leetcode id=1436 lang=python3
#
# [1436] Destination City
#

# @lc code=start
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        s = []
        e = []
        for p in paths:
            s.append(p[0])
            e.append(p[1])

        return  [i for i in e if i not in s][0]
        
# @lc code=end

