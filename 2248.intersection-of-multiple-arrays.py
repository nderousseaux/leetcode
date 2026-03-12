#
# @lc app=leetcode id=2248 lang=python3
#
# [2248] Intersection of Multiple Arrays
#

# @lc code=start
class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        return sorted(
            [
                i for i in nums[0] 
                if len([0 for l in nums[1:] if i not in l]) == 0
            ]
        )
# @lc code=end

