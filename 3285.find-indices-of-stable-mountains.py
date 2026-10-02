#
# @lc app=leetcode id=3285 lang=python3
#
# [3285] Find Indices of Stable Mountains
#

# @lc code=start
class Solution:
    def stableMountains(self, height: List[int], threshold: int) -> List[int]:
        return [i+1 for i in range(len(height)-1) if height[i] > threshold]

# @lc code=end
