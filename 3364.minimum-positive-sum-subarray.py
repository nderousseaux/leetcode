#
# @lc app=leetcode id=3364 lang=python3
#
# [3364] Minimum Positive Sum Subarray
#

# @lc code=start
class Solution:
    def minimumSumSubarray(self, nums: List[int], l: int, r: int) -> int:
        res = math.inf;
        for i in range(len(nums)):
            for j in range(i, len(nums)):
                if j-i+1 >= l and j-i+1 <= r:
                    s = sum(nums[i:j+1])
                    if s > 0:
                        res = min(s, res)
        return res if res != math.inf else -1
# @lc code=end
