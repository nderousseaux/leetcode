#
# @lc app=leetcode id=3684 lang=python3
#
# [3684] Maximize Sum of At Most K Distinct Elements
#

# @lc code=start
class Solution:
    def maxKDistinct(self, nums: List[int], k: int) -> List[int]:
        return sorted(list(set(nums)), reverse=True)[:k]
# @lc code=end
