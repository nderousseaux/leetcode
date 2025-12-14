#
# @lc app=leetcode id=1848 lang=python3
#
# [1848] Minimum Distance to the Target Element
#

# @lc code=start
class Solution:
    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:
        minAbs = 10**4
        for i in range(len(nums)):
            if nums[i] == target:
                minAbs = min(abs(i-start), minAbs)
                
        return minAbs;
# @lc code=end

