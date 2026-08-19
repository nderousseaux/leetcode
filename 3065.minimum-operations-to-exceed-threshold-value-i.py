#
# @lc app=leetcode id=3065 lang=python3
#
# [3065] Minimum Operations to Exceed Threshold Value I
#

# @lc code=start
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        return len([i for i in nums if i < k])
# @lc code=end
