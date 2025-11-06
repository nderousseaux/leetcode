#
# @lc app=leetcode id=1629 lang=python3
#
# [1629] Slowest Key
#

# @lc code=start
class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        new_tab = [releaseTimes[0]]
        for i in range(1, len(releaseTimes)):
            new_tab.append(releaseTimes[i] - releaseTimes[i-1])

        # Get indexes of the max new_tab
        max_val = max(new_tab)
        max_indexes = [i for i, x in enumerate(new_tab) if x == max_val]
        return max(keysPressed[i] for i in max_indexes)
        
        
# @lc code=end

