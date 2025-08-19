#
# @lc app=leetcode id=908 lang=python3
#
# [908] Smallest Range I
#

# @lc code=start
class Solution:
    def smallestRangeI(self, nums: List[int], k: int) -> int:
        min_val = min(nums)
        max_val = max(nums)
        return max(0, max_val - min_val - 2 * k)
# @lc code=end

