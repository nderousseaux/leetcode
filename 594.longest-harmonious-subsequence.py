#
# @lc app=leetcode id=594 lang=python3
#
# [594] Longest Harmonious Subsequence
#

# @lc code=start
class Solution:
    def findLHS(self, nums: List[int]) -> int:
        res = 0
        i, j = 0, 1
        nums.sort()
        while j < len(nums):
            diff = nums[j] - nums[i]

            if diff == 1: # New subsequence, keep the longuest
                res = max(res, j-i + 1)
            if diff <= 1: # Move right pointer for a greater diff
                j +=1
            else: # Move left pointer for lower diff
                i+=1
        return res
# @lc code=end
