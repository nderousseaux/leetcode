#
# @lc app=leetcode id=2399 lang=python3
#
# [2399] Check Distances Between Same Letters
#

# @lc code=start
class Solution:
    def checkDistances(self, s: str, distance: List[int]) -> bool:
        for i in range(len(s)):
            l = s[i]

            # Get distance
            d = s[i+1:].find(l)
            if d == -1: # If -1 -> Second instance
                continue
            
            # Check if distance is correct 
            if d != distance[ord(l)-97]:
                return False

            
        return True
        
# @lc code=end

