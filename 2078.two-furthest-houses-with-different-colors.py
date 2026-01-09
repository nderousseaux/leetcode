#
# @lc app=leetcode id=2078 lang=python3
#
# [2078] Two Furthest Houses With Different Colors
#

# @lc code=start
class Solution:
    def maxDistance(self, colors: List[int]) -> int:
        ptrL = 0
        ptrR = len(colors)-1
        dist = 0

        while ptrR > ptrL:
            if colors[ptrR] != colors[ptrL]:
                dist = ptrR-ptrL
                break
            ptrR -= 1

        ptrL = 0
        ptrR = len(colors)-1
        while ptrR > ptrL:
            if colors[ptrR] != colors[ptrL]:
                dist = max(dist, ptrR-ptrL)
                break
            ptrL += 1

        return dist
        
# @lc code=end
