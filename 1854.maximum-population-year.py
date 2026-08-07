#
# @lc app=leetcode id=1854 lang=python3
#
# [1854] Maximum Population Year
#

# @lc code=start
class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        count = {}

        # Convert to list of year
        for l in logs:
            for v in range(l[0],l[1]):
                count[v] = count.get(v,0) + 1

        # Get the max person alive        
        m = max(count.values())

        # Get the lower year
        return min([i for i in count if count[i] == m])
        
# @lc code=end

