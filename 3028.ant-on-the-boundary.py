#
# @lc app=leetcode id=3028 lang=python3
#
# [3028] Ant on the Boundary
#

# @lc code=start
class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        pos: int = 0
        res: int = 0
        for mov in nums:
            pos+= mov
            if pos == 0:
                res += 1
        return res
# @lc code=end
