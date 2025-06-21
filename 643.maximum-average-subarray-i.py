#
# @lc app=leetcode id=643 lang=python3
#
# [643] Maximum Average Subarray I
#

# @lc code=start
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        res = s = sum(nums[:k])
        # Sliding window
        for i in range(k, len(nums)):
            s += nums[i]      # Add item who enter the window
            s -= nums[i-k]    # Delete item who exit the window
            res = max(res, s)

        return res/k
# @lc code=end

