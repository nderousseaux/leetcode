#
# @lc app=leetcode id=674 lang=python3
#
# [674] Longest Continuous Increasing Subsequence
#

# @lc code=start
class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        curr = 1
        longuest = 1
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]: # Increasing
                curr+=1
            else:
                longuest = max(longuest, curr)
                curr = 1

        return max(longuest, curr)
# @lc code=end

